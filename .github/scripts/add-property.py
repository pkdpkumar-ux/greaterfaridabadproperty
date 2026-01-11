#!/usr/bin/env python3
"""
Script to add submitted property to properties-buy.js
"""

import json
import sys
import re
from datetime import datetime

def add_property_to_file(property_data):
    """Add new property to properties-buy.js"""
    
    file_path = 'src/data/properties-buy.js'
    
    # Parse the property data
    if isinstance(property_data, str):
        data = json.loads(property_data)
    else:
        data = property_data
    
    # Generate next property ID
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the highest ID
    id_matches = re.findall(r'id:\s*(\d+)', content)
    if id_matches:
        max_id = max(int(x) for x in id_matches)
        new_id = max_id + 1
    else:
        new_id = 21  # Start from 21 if no IDs found
    
    # Create property object
    property_obj = {
        'id': new_id,
        'title': f"{data.get('bhk', 'N/A')} BHK {data.get('propertyType', 'Property').title()} in Sector {data.get('sector', 'N/A')}",
        'location': f"Sector {data.get('sector', 'N/A')}, Greater Faridabad",
        'sector': data.get('sector', 'N/A'),
        'price': int(data.get('price', 0)) if data.get('listType') == 'sell' else None,
        'priceDisplay': format_price(int(data.get('price', 0))) if data.get('listType') == 'sell' else None,
        'type': data.get('propertyType', 'residential').lower(),
        'bhk': int(data.get('bhk', 1)),
        'size': int(data.get('propertySize', 1000)),
        'floor': int(data.get('floorNumber', 1)),
        'totalFloors': int(data.get('floorNumber', 1)) + 5,  # Estimate
        'propertyAge': 'New',
        'images': [
            'https://images.unsplash.com/photo-1545321390-81a88d842e2f?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop'
        ],
        'amenities': data.get('amenities', []),
        'features': ['Spacious', 'Modern', 'Well-lit', 'Ventilated'],
        'description': data.get('description', 'Well-appointed property with modern amenities.'),
        'builder': data.get('builder', 'Independent'),
        'mapLink': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.123456!2d77.314812!3d28.408976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjMiTiA3N8KwMTgnNTMuMyJF!5e0!3m2!1sen!2sin!4v1234567890',
        'submittedBy': data.get('ownerName', 'User'),
        'submittedAt': data.get('submittedAt', datetime.now().isoformat()),
        'ownerEmail': data.get('ownerEmail', ''),
        'ownerPhone': data.get('ownerPhone', '')
    }
    
    # Convert to JavaScript object string
    js_property = property_to_js(property_obj)
    
    # Find the insertion point (before the last closing bracket)
    match = re.search(r'(\s*\]\s*;?\s*)(\/\/ For backwards compatibility)', content)
    
    if match:
        insertion_point = match.start(1)
        # Add comma if needed
        new_content = (
            content[:insertion_point].rstrip() + ',\n    ' +
            js_property + '\n' +
            content[insertion_point:]
        )
    else:
        # Fallback: find the last property and add after it
        match = re.search(r'(\{[^}]*submittedAt[^}]*\})\s*(\])', content)
        if match:
            new_content = (
                content[:match.end(1)] + ',\n    ' +
                js_property +
                content[match.start(2):]
            )
        else:
            print("Warning: Could not find insertion point, appending at end")
            new_content = content
    
    # Write back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✓ Property added with ID: {new_id}")
    return True

def format_price(price):
    """Format price in Indian notation"""
    if price >= 10000000:
        return f"₹{price / 10000000:.1f} Cr"
    elif price >= 100000:
        return f"₹{price / 100000:.0f} Lakh"
    elif price >= 1000:
        return f"₹{price / 1000:.0f}K"
    return f"₹{price}"

def property_to_js(obj):
    """Convert property object to JavaScript format"""
    js_str = "{\n"
    for key, value in obj.items():
        if value is None:
            js_str += f"        {key}: null,\n"
        elif isinstance(value, str):
            js_str += f"        {key}: \"{value}\",\n"
        elif isinstance(value, (int, float)):
            js_str += f"        {key}: {value},\n"
        elif isinstance(value, list):
            if value and isinstance(value[0], str):
                items = ', '.join(f'"{item}"' for item in value)
                js_str += f"        {key}: [{items}],\n"
            else:
                js_str += f"        {key}: {json.dumps(value)},\n"
        elif isinstance(value, dict):
            js_str += f"        {key}: {json.dumps(value)},\n"
        else:
            js_str += f"        {key}: {value},\n"
    
    # Remove last comma
    js_str = js_str.rstrip(',\n') + '\n    }'
    return js_str

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: add-property.py <json_property_data>")
        sys.exit(1)
    
    property_json = sys.argv[1]
    try:
        add_property_to_file(property_json)
        print("Property successfully added!")
    except Exception as e:
        print(f"Error adding property: {e}")
        sys.exit(1)
