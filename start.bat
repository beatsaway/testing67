@echo off
setlocal
cd /d "%~dp0"
set PORT=8780
title South Pole rover

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found on this computer.
  echo.
  echo Install it from https://nodejs.org ^(the LTS button^),
  echo then double-click this file again.
  echo.
  pause
  exit /b 1
)

echo Freeing port %PORT%...
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":%PORT% .*LISTENING"') do (
  echo Stopping PID %%P
  taskkill /F /PID %%P >nul 2>&1
)

echo Opening http://127.0.0.1:%PORT%/lunar-rover-v4/index.html
start "" cmd /c "timeout /t 1 /nobreak >nul & start http://127.0.0.1:%PORT%/lunar-rover-v4/index.html"

echo.
echo Serving the rover. Close this window to stop it.
echo.
node "%~dp0serve.js"
if errorlevel 1 pause
