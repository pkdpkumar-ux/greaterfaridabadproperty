@echo off
REM Greater Faridabad Property - Start All Servers

color 0A
cls

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  Greater Faridabad Property - Starting All Servers        ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Get the directory where this script is located
cd /d "%~dp0"

echo Checking Python installation...
python --version >nul 2>&1
if errorlevel 1 (
    color 0C
    echo ✗ Python is not installed or not in PATH
    echo Please install Python from https://www.python.org
    pause
    exit /b 1
)

echo ✓ Python found: 
python --version

echo.
echo Starting Flask Backend (Port 3001)...
start "Greater Faridabad Backend" cmd /k "title Backend Server (Port 3001) && python app.py"

echo Waiting for backend to start...
timeout /t 3 /nobreak

echo.
echo Starting HTTP Server (Port 8000)...
start "Greater Faridabad Website" cmd /k "title Website Server (Port 8000) && python -m http.server 8000"

echo Waiting for servers to fully start...
timeout /t 2 /nobreak

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  ✓ All servers started!                                    ║
echo ╠════════════════════════════════════════════════════════════╣
echo ║  Backend:  http://localhost:3001                           ║
echo ║  Website:  http://localhost:8000                           ║
echo ║  Status:   http://localhost:8000/SERVER_STATUS.html        ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

echo Opening website in browser...
timeout /t 2 /nobreak
start http://localhost:8000

echo.
echo ℹ Do not close these windows while using the website!
echo ℹ To stop: Press Ctrl+C in each window
echo.

pause
