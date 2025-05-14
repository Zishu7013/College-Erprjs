@echo off
echo Starting deployment process...

:: Install dependencies and build client
cd client
echo Installing client dependencies...
call npm install
echo Building client...
call npm run build
cd ..

:: Install dependencies and start server
cd server
echo Installing server dependencies...
call npm install
echo Starting server in production mode...
call npm run prod

pause 