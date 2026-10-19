@echo off
title Bilim_Uz Ta'lim Dasturi
echo ========================================================
echo         BILIM_UZ — INTERAKTIV TA'LIM PLATFORMASI
echo ========================================================
echo Dastur ishga tushirilmoqda...

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Python topildi. Mahalliy server ishga tushirilmoqda...
    python run.py
) else (
    echo Brauzerda to'g'ridan-to'g'ri ochilmoqda...
    start "" index.html
)
pause
