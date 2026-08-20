@echo off
set "PATH=C:\Users\EDY\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\EDY\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin;%PATH%"
cd /d "%~dp0"
echo Starting Spanish Learning OS...
echo.
echo Open this address on this computer after you see "Ready":
echo http://127.0.0.1:3000/today
echo.
echo To open it on your phone, keep both devices on the same Wi-Fi and use:
powershell -NoProfile -Command "$line=(ipconfig | Select-String 'IPv4' | Select-Object -First 1).ToString(); $ip=($line -split ':')[-1].Trim(); if ($ip) { Write-Output ('http://' + $ip + ':3000/today') } else { Write-Output 'Could not detect the Wi-Fi IP automatically.' }"
echo.
pnpm.cmd dev --hostname 0.0.0.0 --port 3000
pause
