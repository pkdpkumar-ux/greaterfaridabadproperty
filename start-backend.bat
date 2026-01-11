@echo off
REM Greater Faridabad Property - Flask Backend Setup for Windows

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  Greater Faridabad Property - Flask Backend                ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check Python installation
python --version >nul 2>&1
if errorlevel 1 (
    echo ✗ Python is not installed or not in PATH
    echo Please install Python from https://www.python.org
    pause
    exit /b 1
)

echo ✓ Python found
python --version

REM Check .env file
if not exist .env (
    if exist .env.example (
        echo.
        echo Creating .env file from .env.example...
        copy .env.example .env
        echo ✓ .env file created
    ) else (
        echo.
        echo ⚠ .env file not found. Please create it with GitHub token.
        pause
        exit /b 1
    )
)

echo.
echo ✓ .env file exists
echo.
echo 📦 Installing Python dependencies...
echo ════════════════════════════════════════════════════════════

python -m pip install -r requirements.txt
if errorlevel 1 (
    echo ✗ Error installing dependencies
    pause
    exit /b 1
)

echo.
echo ════════════════════════════════════════════════════════════
echo ✓ Dependencies installed!
echo.
echo 🚀 Starting Flask Backend Server...
echo ════════════════════════════════════════════════════════════
echo.

python app.py

pause
