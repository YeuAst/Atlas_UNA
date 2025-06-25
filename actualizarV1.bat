@echo off
Powershell -NoProfile -ExecutionPolicy Bypass -Command "& {"Start-Process -Verb RunAs powershell -ArgumentList '-NoProfile -ExecutionPolicy Bypass -Command "winget upgrade --include-unknown --all"'}"


