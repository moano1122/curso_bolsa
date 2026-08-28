@echo off
title Curso de Bolsa
cd /d "%~dp0"

where python >nul 2>&1
if errorlevel 1 (
  echo.
  echo   No se encuentra Python en este equipo.
  echo   Instalalo desde https://www.python.org/downloads/
  echo   y marca la casilla "Add Python to PATH" durante la instalacion.
  echo.
  pause
  exit /b 1
)

echo.
echo   Arrancando el curso...
echo   Cuando termines, cierra esta ventana o pulsa Ctrl+C.
echo.

rem El navegador se abre en paralelo, tras dar tiempo al servidor a escuchar
start "" /b cmd /c "timeout /t 2 /nobreak >nul & start "" http://127.0.0.1:8777"

python backend\server.py
pause
