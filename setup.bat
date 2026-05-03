@echo off
echo ======================================
echo  Setting up Bug Bounty Recons CLI...  
echo ======================================

where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [-] npm is not installed. Please install Node.js and npm first.
    exit /b 1
)

echo [*] Navigating to cli directory...
cd cli || (
    echo [-] Failed to find 'cli' directory!
    exit /b 1
)

echo [*] Installing dependencies...
call npm install

echo [*] Linking package globally...
call npm link

echo ======================================
echo  Setup Complete!                      
echo ======================================
echo You can now run the tool from anywhere using:
echo   ^> bbrecon ^<domain^>
echo.
echo To explore the menu interactively, just type:
echo   ^> bbrecon
echo.
echo You can also access the Web Dashboard directly from the CLI menu!
echo ======================================
pause
