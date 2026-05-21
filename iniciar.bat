@echo off
title Iniciar CineApp completo
echo ========================================================
echo        Iniciando CineApp (Backend y Frontend)
echo ========================================================
echo.

echo [1/2] Iniciando Backend (Spring Boot)...
start "CineApp - Backend (Spring Boot)" cmd /k "cd backend && mvnw.cmd spring-boot:run"

echo [2/2] Iniciando Frontend (Angular en puerto 4201)...
start "CineApp - Frontend (Angular)" cmd /k "cd frontend\cine-frontend && npm run start -- --port 4201"

echo.
echo ========================================================
echo   Los servicios se estan levantando en segundo plano:
echo   - Backend corriendo en:   http://localhost:8080
echo   - Frontend corriendo en:  http://localhost:4201
echo.
echo   No cierres las ventanas de consola adicionales que se han abierto.
echo ========================================================
echo.
pause
