# How to Start All Servers - Complete Guide

## Issue You Experienced
"This site can't be reached" when clicking on other pages

## Root Cause
The **HTTP Server (port 8000)** was not running. You need **TWO servers** running simultaneously:
1. **Flask Backend** (port 3001) - for API endpoints and emails
2. **HTTP Server** (port 8000) - for serving the website files

---

## Quick Start (Copy & Paste)

### Terminal 1: Start Flask Backend
```powershell
cd "c:\Website\greaterfaridabadproperty"
python app.py
```

You should see:
```
╔════════════════════════════════════════════════════════════╗
║  🚀 Property Listing API Server (Flask)                   ║
╠════════════════════════════════════════════════════════════╣
║  Server Running on: http://localhost:3001                 ║
║  API Endpoint: POST http://localhost:3001/api/property/submit ║
║  Health Check: GET http://localhost:3001/api/health       ║
║  Info: GET http://localhost:3001/api/info                ║
╚════════════════════════════════════════════════════════════╝

⚠ GitHub Integration: Disabled (GITHUB_TOKEN not set)
```

### Terminal 2: Start HTTP Server
```powershell
cd "c:\Website\greaterfaridabadproperty"
python -m http.server 8000
```

You should see:
```
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

---

## Visit Your Website

Once both servers are running, visit:
**http://localhost:8000/index.html**

or simply: **http://localhost:8000**

---

## Testing Navigation

✅ Click on "Buy" → Should go to **http://localhost:8000/pages/properties.html**  
✅ Click on "Rent" → Should go to **http://localhost:8000/pages/rent.html**  
✅ Click on "Contact US" → Should go to **http://localhost:8000/pages/contact.html**  
✅ Fill out any form and submit → Email should be sent  

---

## Quick Status Check

Visit: **http://localhost:8000/SERVER_STATUS.html**

This page will show you:
- ✓ If Flask Backend is running
- ✓ If HTTP Server is running
- ✓ Quick links to all pages

---

## What Each Server Does

| Server | Port | Purpose |
|--------|------|---------|
| **Flask Backend (app.py)** | 3001 | Handles API calls, sends emails, processes property submissions |
| **HTTP Server** | 8000 | Serves HTML pages, CSS, JavaScript files |

---

## If "Site Can't Be Reached" Error Returns

### Step 1: Verify Both Servers are Running
Open PowerShell and run:
```powershell
netstat -ano | findstr "3001 8000"
```

You should see connections on both ports.

### Step 2: Check Server Terminals
- Look at Terminal 1 (Flask): Should show "Running on http://localhost:3001"
- Look at Terminal 2 (HTTP): Should show "Serving HTTP on :: port 8000"

### Step 3: Restart If Needed
If either server stopped, restart it using the commands above.

### Step 4: Clear Browser Cache
Press: **Ctrl + Shift + Delete** to clear cache, then refresh the page.

---

## Shortcut Commands

### Windows Batch File to Auto-Start Both
Save this as `START_ALL.bat` in your website folder:

```batch
@echo off
cd /d "%~dp0"

REM Start Backend in background
start "Backend Server (Flask)" cmd /k "python app.py"

REM Start HTTP Server in background
timeout /t 2
start "Website Server (HTTP)" cmd /k "python -m http.server 8000"

REM Open browser
timeout /t 3
start http://localhost:8000

echo.
echo ✓ Both servers started!
echo ✓ Website should open in your browser
echo.
pause
```

Then just double-click `START_ALL.bat` to start everything!

---

## File Structure Reminder

```
c:\Website\greaterfaridabadproperty\
├── app.py                      ← Flask backend
├── index.html                  ← Home page
├── pages/
│   ├── properties.html         ← Buy properties
│   ├── rent.html               ← Rent properties
│   ├── contact.html            ← Contact page
│   ├── list-property.html      ← List your property
│   ├── sector-wise.html        ← Sectors
│   ├── about.html              ← About us
│   ├── builder-properties.html ← Builders
│   └── property-details.html   ← Property details
├── src/
│   ├── css/                    ← Styles
│   ├── js/                     ← JavaScript
│   └── data/                   ← Property data
└── requirements.txt            ← Python dependencies
```

---

## Port Conflicts

If you get "Address already in use" error:

### Find what's using the port
```powershell
netstat -ano | findstr "8000"
```

### Kill the process
```powershell
# Replace XXXX with the PID shown above
taskkill /PID XXXX /F
```

---

## Common Issues & Solutions

### ❌ "Python not found"
- Python is not installed or not in PATH
- Solution: Install Python from https://www.python.org

### ❌ "Port 8000 already in use"
- Another application is using port 8000
- Solution: Kill the process (see Port Conflicts section above)

### ❌ "Module not found" error
- Python dependencies not installed
- Solution: Run `pip install -r requirements.txt`

### ❌ Emails not sending
- Backend server not running
- Solution: Make sure Flask backend (app.py) is running on port 3001

### ❌ Page CSS/styling looks wrong
- CSS files not loading
- Solution: Make sure HTTP server (8000) is running

---

## Keep Servers Running

⚠️ **Important:** Keep both terminal windows open while you're testing.  
- **Do NOT close the terminal windows** - this stops the servers
- To stop servers: Press `Ctrl+C` in each terminal
- To restart: Close both terminals and run the commands again

---

## Test Everything Works

1. ✅ Visit http://localhost:8000/index.html
2. ✅ Click navigation links (all pages should load)
3. ✅ Go to EMAIL_TEST_FORM.html and test email
4. ✅ Fill out contact form and submit
5. ✅ Check console (F12) for any errors

---

## Version Info
- **Flask Backend:** Running on port 3001
- **HTTP Server:** Running on port 8000
- **Website:** http://localhost:8000
- **API Health:** http://localhost:3001/api/health

**Everything is now working! 🎉**
