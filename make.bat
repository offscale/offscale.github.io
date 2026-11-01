@echo off
IF "%1"=="" GOTO build
IF "%1"=="all" GOTO build
IF "%1"=="build" GOTO build
IF "%1"=="build_cdd_web_ui" GOTO build_cdd_web_ui
IF "%1"=="test" GOTO test
IF "%1"=="lint" GOTO lint
IF "%1"=="typecheck" GOTO typecheck
IF "%1"=="clean" GOTO clean
GOTO :EOF

:build_cdd_web_ui
echo Building ..\cdd-web-ui (production)...
pushd ..\cdd-web-ui
if errorlevel 1 exit /b 1
if not exist "node_modules\@angular\build" (
    call npm install
    if errorlevel 1 (
        popd
        exit /b 1
    )
)
call npm run build:prod -- --base-href /cdd-web-ui/
if errorlevel 1 (
    popd
    exit /b 1
)
popd
echo Syncing ..\cdd-web-ui\dist\cdd-web-ui\browser into .\cdd-web-ui...
if exist "cdd-web-ui" rmdir /s /q "cdd-web-ui"
mkdir "cdd-web-ui"
xcopy /E /I /Y "..\cdd-web-ui\dist\cdd-web-ui\browser\*" "cdd-web-ui"
if errorlevel 1 exit /b 1
if exist "cdd-web-ui\assets\wasm" rmdir /s /q "cdd-web-ui\assets\wasm"
copy /Y "cdd-web-ui\index.html" "cdd-web-ui\404.html" >nul
copy /Y "cdd-web-ui\index.html" "404.html" >nul
for %%R in (workspace login auth-callback dashboard dashboard\organizations dashboard\repositories dashboard\secrets dashboard\audit-logs) do (
    if not exist "cdd-web-ui\%%R" mkdir "cdd-web-ui\%%R"
    copy /Y "cdd-web-ui\index.html" "cdd-web-ui\%%R\index.html" >nul
)
GOTO :EOF

:build
CALL "%~f0" build_cdd_web_ui
if errorlevel 1 exit /b 1
call npm run build
if errorlevel 1 exit /b 1
GOTO :EOF

:test
call npm test
if errorlevel 1 exit /b 1
GOTO :EOF

:lint
call npm run lint
if errorlevel 1 exit /b 1
GOTO :EOF

:typecheck
call npm run typecheck
if errorlevel 1 exit /b 1
GOTO :EOF

:clean
if exist "dist" rmdir /s /q "dist"
if exist "coverage" rmdir /s /q "coverage"
GOTO :EOF
