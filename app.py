"""
Greater Faridabad Property - Property Listing API Server
Flask backend to receive property submissions and trigger GitHub Actions
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv
from datetime import datetime
import json
import re
import subprocess

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')
GITHUB_REPO = os.getenv('GITHUB_REPO', 'yourusername/greaterfaridabadproperty')
PORT = int(os.getenv('PORT', 3001))

# Get the base directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROPERTIES_FILE = os.path.join(BASE_DIR, 'src', 'data', 'properties-buy.js')

@app.route('/api/property/submit', methods=['POST'])
def submit_property():
    """
    API endpoint to receive property submission
    Directly adds property to properties-buy.js and commits to Git
    """
    try:
        property_data = request.get_json()
        
        # Log the submission
        print(f"\n✓ Property submission received:")
        print(f"  Owner: {property_data.get('ownerName')}")
        print(f"  Type: {property_data.get('propertyType')}")
        print(f"  Sector: {property_data.get('sector')}")
        
        # Validate required fields
        required_fields = ['ownerName', 'ownerEmail', 'propertyType']
        for field in required_fields:
            if field not in property_data:
                return jsonify({
                    'success': False,
                    'message': f'Missing required field: {field}'
                }), 400
        
        # Add property to properties file
        success = add_property_to_file(property_data)
        
        if success:
            print(f"  ✓ Property added to properties-buy.js")
            # Try to commit to Git
            try:
                commit_to_git(property_data)
                print(f"  ✓ Changes committed to Git")
            except Exception as e:
                print(f"  ⚠ Git commit warning: {str(e)}")
            
            return jsonify({
                'success': True,
                'message': 'Property submitted successfully and added to our platform!',
                'propertyData': property_data
            }), 200
        else:
            return jsonify({
                'success': False,
                'message': 'Failed to add property to database'
            }), 500
        
    except Exception as e:
        print(f"✗ Error processing property submission: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'Error processing submission',
            'error': str(e)
        }), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'OK',
        'timestamp': datetime.now().isoformat(),
        'service': 'Greater Faridabad Property - Listing API'
    }), 200


@app.route('/api/info', methods=['GET'])
def api_info():
    """API information endpoint"""
    return jsonify({
        'service': 'Greater Faridabad Property - Listing API',
        'version': '1.0.0',
        'framework': 'Flask',
        'endpoints': {
            'submit': 'POST /api/property/submit',
            'health': 'GET /api/health',
            'info': 'GET /api/info'
        }
    }), 200


def trigger_github_workflow(property_data, token, repo):
    """
    Trigger GitHub Actions workflow via dispatch event (DEPRECATED - using direct file update instead)
    """
    try:
        owner, repo_name = repo.split('/')
        
        url = f'https://api.github.com/repos/{owner}/{repo_name}/dispatches'
        
        headers = {
            'Authorization': f'token {token}',
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        }
        
        payload = {
            'event_type': 'property_submitted',
            'client_payload': property_data
        }
        
        response = requests.post(url, json=payload, headers=headers, timeout=10)
        
        if response.status_code == 204:
            print("  ✓ GitHub workflow triggered successfully")
            return True
        else:
            print(f"  ⚠ GitHub API response: {response.status_code}")
            if response.text:
                print(f"  Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"  ✗ Error triggering GitHub workflow: {str(e)}")
        raise


def add_property_to_file(property_data):
    """
    Add property directly to properties-buy.js file
    """
    try:
        if not os.path.exists(PROPERTIES_FILE):
            print(f"  ✗ Properties file not found: {PROPERTIES_FILE}")
            return False
        
        # Read the current file
        with open(PROPERTIES_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Format the property object
        property_obj = format_property_object(property_data)
        
        # Find the insertion point - look for the last closing "}" before "];"
        # Search for pattern: }  \n];
        buy_data_start = content.find('const buyPropertiesData = [')
        if buy_data_start == -1:
            print(f"  ✗ Could not find buyPropertiesData in properties file")
            return False
        
        # Find the closing ]; of buyPropertiesData
        search_start = buy_data_start + len('const buyPropertiesData = [')
        bracket_count = 1
        close_bracket_pos = search_start
        
        for i in range(search_start, len(content)):
            if content[i] == '[':
                bracket_count += 1
            elif content[i] == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    close_bracket_pos = i
                    break
        
        if close_bracket_pos == search_start:
            print(f"  ✗ Could not find closing bracket in properties file")
            return False
        
        # Find the last closing brace "}" before the ];
        # Look backwards from the ];
        last_closing_brace = content.rfind('}', search_start, close_bracket_pos)
        
        if last_closing_brace == -1:
            print(f"  ✗ Could not find property object in buyPropertiesData")
            return False
        
        # Insert after the last closing brace with proper formatting
        insertion_point = last_closing_brace + 1
        new_content = content[:insertion_point] + ',\n    ' + property_obj + content[insertion_point:]
        
        # Write back to file
        with open(PROPERTIES_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"  ✗ Error adding property to file: {str(e)}")
        return False


def format_property_object(data):
    """
    Format property data into JavaScript object string
    """
    # Auto-generate ID (get max ID and add 1)
    try:
        with open(PROPERTIES_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all IDs
        id_matches = re.findall(r'id:\s*(\d+)', content)
        max_id = max([int(m) for m in id_matches]) if id_matches else 0
        new_id = max_id + 1
    except:
        new_id = 1
    
    # Format price
    price = data.get('price', 0)
    if price:
        price_str = format_indian_price(int(price))
    else:
        price_str = "Contact for price"
    
    # Amenities array
    amenities = data.get('amenities', [])
    amenities_str = ', '.join([f'"{a}"' for a in amenities])
    
    # Build property object with correct schema to match existing properties
    prop_obj = f"""{{
        id: {new_id},
        title: "{data.get('ownerName', 'Unknown')}'s Property",
        location: "Sector {data.get('sector', 'TBD')}, Greater Faridabad",
        sector: "{data.get('sector', 'TBD')}",
        price: {int(price) if price else 0},
        priceDisplay: "{price_str}",
        type: "{data.get('propertyType', 'apartment').lower()}",
        bhk: {data.get('bhk', 2)},
        size: {data.get('propertySize', 0)},
        floor: {data.get('floorNumber', '0').replace('+', '').split()[0] if data.get('floorNumber') else 0},
        totalFloors: 5,
        propertyAge: "User Submitted",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
        ],
        amenities: [{amenities_str}],
        features: ["User Submitted Property"],
        description: "{data.get('description', 'No description provided')}",
        builder: "User",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.788486!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
    }}"""
    
    return prop_obj


def format_indian_price(price):
    """
    Format price in Indian notation (Lakh/Crore)
    """
    if price >= 10000000:  # 1 Crore
        crores = price / 10000000
        lakhs = (price % 10000000) / 100000
        if lakhs > 0:
            return f"₹{crores:.0f}.{lakhs:.0f} Cr"
        return f"₹{crores:.0f} Cr"
    elif price >= 100000:  # 1 Lakh
        lakhs = price / 100000
        thousands = (price % 100000) / 1000
        if thousands > 0:
            return f"₹{lakhs:.0f}.{thousands:.0f} L"
        return f"₹{lakhs:.0f} L"
    else:
        return f"₹{price:,}"


def commit_to_git(property_data):
    """
    Commit changes to Git repository
    """
    try:
        # Change to repo directory
        original_dir = os.getcwd()
        os.chdir(BASE_DIR)
        
        # Configure git if needed
        subprocess.run(['git', 'config', 'user.email', 'greaterfaridabadproperty@gmail.com'], 
                      capture_output=True, timeout=5)
        subprocess.run(['git', 'config', 'user.name', 'Property Bot'], 
                      capture_output=True, timeout=5)
        
        # Add the properties file
        subprocess.run(['git', 'add', 'src/data/properties-buy.js'], 
                      capture_output=True, timeout=5)
        
        # Commit
        commit_msg = f"Add property listing: {property_data.get('propertyType')} in Sector {property_data.get('sector')} by {property_data.get('ownerName')}"
        result = subprocess.run(['git', 'commit', '-m', commit_msg], 
                               capture_output=True, timeout=5)
        
        os.chdir(original_dir)
        
        if result.returncode == 0:
            return True
        else:
            # Commit might fail if there are no changes
            return True
            
    except Exception as e:
        print(f"  ✗ Git commit error: {str(e)}")
        return False


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({
        'success': False,
        'message': 'Endpoint not found',
        'available_endpoints': {
            'submit': 'POST /api/property/submit',
            'health': 'GET /api/health',
            'info': 'GET /api/info'
        }
    }), 404


@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({
        'success': False,
        'message': 'Internal server error'
    }), 500


if __name__ == '__main__':
    print(f"""
╔════════════════════════════════════════════════════════════╗
║  🚀 Property Listing API Server (Flask)                   ║
╠════════════════════════════════════════════════════════════╣
║  Server Running on: http://localhost:{PORT}               ║
║  API Endpoint: POST http://localhost:{PORT}/api/property/submit ║
║  Health Check: GET http://localhost:{PORT}/api/health     ║
║  Info: GET http://localhost:{PORT}/api/info              ║
╚════════════════════════════════════════════════════════════╝
    """)
    
    if GITHUB_TOKEN:
        print(f"✓ GitHub Integration: Enabled")
        print(f"  Repository: {GITHUB_REPO}\n")
    else:
        print("⚠ GitHub Integration: Disabled (GITHUB_TOKEN not set)\n")
    
    app.run(host='localhost', port=PORT, debug=True)
