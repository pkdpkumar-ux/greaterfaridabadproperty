# Python Flask Backend - Setup Guide

## Overview

This is a Python Flask backend that handles property listing submissions and integrates with GitHub Actions to automatically update property data.

**No Node.js required** - uses Python which you already have!

## Quick Start (2 Minutes)

### Step 1: Install Dependencies

Open PowerShell in the project directory and run:

```powershell
pip install -r requirements.txt
```

Expected output:
```
Successfully installed Flask Flask-CORS requests python-dotenv Werkzeug
```

### Step 2: Check .env File

Your `.env` file should have:

```
GITHUB_TOKEN=github_pat_xxxxx...
GITHUB_REPO=yourusername/greaterfaridabadproperty
PORT=3001
```

You already have this configured! ✓

### Step 3: Start the Backend

```powershell
python app.py
```

Expected output:
```
╔════════════════════════════════════════════════════════════╗
║  🚀 Property Listing API Server (Flask)                   ║
╠════════════════════════════════════════════════════════════╣
║  Server Running on: http://localhost:3001                 ║
║  API Endpoint: POST http://localhost:3001/api/property/submit ║
║  Health Check: GET http://localhost:3001/api/health       ║
║  Info: GET http://localhost:3001/api/info                 ║
╚════════════════════════════════════════════════════════════╝

✓ GitHub Integration: Enabled
  Repository: pkdpkumar-ux/greaterfaridabadproperty
```

### Step 4: Keep Website Running

In another terminal, run:

```powershell
python -m http.server 8000
```

## API Endpoints

### Submit Property Listing
```
POST http://localhost:3001/api/property/submit

Content-Type: application/json

Body: {
  "ownerName": "John Doe",
  "ownerEmail": "john@example.com",
  "ownerPhone": "9876543210",
  "listType": "sell",
  "propertyType": "residential",
  "sector": "78",
  "propertySize": "1500",
  "bhk": "2",
  "floorNumber": "5",
  "furnishing": "semi-furnished",
  "price": "7500000",
  "amenities": ["gym", "pool"],
  "description": "Beautiful apartment...",
  "submittedAt": "2026-01-11T..."
}

Response: {
  "success": true,
  "message": "Property submitted successfully...",
  "propertyData": {...}
}
```

### Health Check
```
GET http://localhost:3001/api/health

Response: {
  "status": "OK",
  "timestamp": "2026-01-11T...",
  "service": "Greater Faridabad Property - Listing API"
}
```

### API Info
```
GET http://localhost:3001/api/info

Response: {
  "service": "Greater Faridabad Property - Listing API",
  "version": "1.0.0",
  "framework": "Flask",
  "endpoints": {...}
}
```

## How It Works

```
User submits form on website
        ↓
Form sends POST request to http://localhost:3001/api/property/submit
        ↓
Flask API receives and validates data
        ↓
API triggers GitHub Actions via GitHub API
        ↓
GitHub Action runs Python script
        ↓
Property added to src/data/properties-buy.js
        ↓
Changes committed and pushed to GitHub
        ↓
Success response sent back to user
        ↓
User sees success message
```

## Files Created

1. **app.py** - Main Flask application (API server)
2. **requirements.txt** - Python dependencies
3. **setup.py** - Interactive setup script
4. **start-backend.bat** - Windows batch file to start backend

## Dependencies

The `requirements.txt` includes:

- **Flask** - Web framework
- **Flask-CORS** - Cross-origin request support
- **requests** - HTTP library for GitHub API
- **python-dotenv** - Environment variable management
- **Werkzeug** - WSGI utilities

All are lightweight and install in seconds!

## Troubleshooting

### Error: "No module named 'flask'"
**Solution:** Run `pip install -r requirements.txt`

### Error: "GITHUB_TOKEN not found"
**Solution:** Check your `.env` file has the token

### Error: "Connection refused"
**Solution:** Make sure backend is running: `python app.py`

### Port 3001 already in use
**Solution:** Edit `.env` and change PORT to different number (e.g., 3002)

## Different Ways to Start Backend

### Method 1: Direct Python Command
```powershell
python app.py
```

### Method 2: Using Setup Script
```powershell
python setup.py
```

### Method 3: Windows Batch File
```powershell
.\start-backend.bat
```

### Method 4: Using pip as module
```powershell
python -m flask run --port=3001
```

## Testing the API

### Using PowerShell/curl:
```powershell
$body = @{
    ownerName = "Test User"
    ownerEmail = "test@example.com"
    ownerPhone = "9876543210"
    propertyType = "residential"
    sector = "78"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3001/api/property/submit" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body
```

### Using Browser:
1. Visit: http://localhost:3001/api/health
2. Should show status: OK

## Running Both Servers

You need TWO terminals:

**Terminal 1 - Website (Python HTTP Server):**
```powershell
python -m http.server 8000
```

**Terminal 2 - Backend API (Flask):**
```powershell
python app.py
```

Then visit: http://localhost:8000/pages/list-property.html

## Configuration Options

Edit `.env` file to customize:

```
# API Port (default: 3001)
PORT=3001

# GitHub Token (required for auto-update)
GITHUB_TOKEN=github_pat_xxxxx...

# GitHub Repository (required for auto-update)
GITHUB_REPO=username/repo

# Debug Mode (set to False for production)
FLASK_ENV=development
```

## Important Notes

⚠️ **Keep .env file secure:**
- Never commit `.env` to GitHub
- Never share your GITHUB_TOKEN
- Use environment variables in production

✅ **GitHub Integration:**
- Properties auto-update in `src/data/properties-buy.js`
- Requires valid GitHub token with `repo` and `workflow` permissions
- Works with the GitHub Actions workflow in `.github/workflows/`

## Production Deployment

For production, use:
```powershell
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:3001 app:app
```

## Support

**Issues?**
1. Check Python version: `python --version` (should be 3.7+)
2. Check Flask installation: `pip show flask`
3. Check `.env` file configuration
4. Check backend terminal for error messages
5. Check browser console (F12) for request errors

## Next Steps

1. ✅ Install dependencies: `pip install -r requirements.txt`
2. ✅ Start backend: `python app.py`
3. ✅ Start website: `python -m http.server 8000`
4. ✅ Test submission: http://localhost:8000/pages/list-property.html
5. ✅ Check GitHub Actions for auto-update

---

**Status**: Ready to use! 🚀
**Framework**: Flask (Python)
**Port**: 3001
**Last Updated**: January 11, 2026
