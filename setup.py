#!/usr/bin/env python3
"""
Quick setup script for Python Flask backend
Install dependencies and start server
"""

import subprocess
import sys
import os

def install_dependencies():
    """Install required Python packages"""
    print("\n📦 Installing Python dependencies...")
    print("=" * 60)
    
    try:
        subprocess.check_call([
            sys.executable, '-m', 'pip', 'install', '-r', 'requirements.txt'
        ])
        print("=" * 60)
        print("✓ Dependencies installed successfully!\n")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ Error installing dependencies: {e}\n")
        return False


def check_env_file():
    """Check if .env file exists"""
    if os.path.exists('.env'):
        print("✓ .env file found")
        return True
    elif os.path.exists('.env.example'):
        print("⚠ .env file not found, creating from .env.example...")
        try:
            with open('.env.example', 'r') as src:
                with open('.env', 'w') as dst:
                    dst.write(src.read())
            print("✓ .env file created\n")
            return True
        except Exception as e:
            print(f"✗ Error creating .env: {e}\n")
            return False
    else:
        print("⚠ No .env or .env.example file found\n")
        return False


def start_server():
    """Start Flask development server"""
    print("\n" + "=" * 60)
    print("🚀 Starting Flask Backend Server...")
    print("=" * 60 + "\n")
    
    try:
        subprocess.run([sys.executable, 'app.py'], check=False)
    except KeyboardInterrupt:
        print("\n✓ Server stopped by user")
    except Exception as e:
        print(f"✗ Error starting server: {e}")


def main():
    """Main setup function"""
    print("""
╔════════════════════════════════════════════════════════════╗
║  Greater Faridabad Property - Flask Backend Setup         ║
╚════════════════════════════════════════════════════════════╝
    """)
    
    # Check .env file
    if not check_env_file():
        print("Please create .env file with GitHub configuration")
        sys.exit(1)
    
    # Install dependencies
    if not install_dependencies():
        sys.exit(1)
    
    # Start server
    start_server()


if __name__ == '__main__':
    main()
