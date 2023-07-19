@echo off

if exist node_modules\ (
    node app.js
    pause
) else (
    call npm i >> NUL 
    node app.js
    pause
)