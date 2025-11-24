#!/usr/bin/env pwsh
# Script to compile LaTeX resume to PDF

# Configuration
$MIKTEX_BIN = "C:\Program Files\MiKTeX\miktex\bin\x64"
$RESUME_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$RESUME_FILE = "resume_2024.tex"
$RESUME_NAME = [System.IO.Path]::GetFileNameWithoutExtension($RESUME_FILE)

# Add MiKTeX to PATH for this session
$env:Path = "$MIKTEX_BIN;$env:Path"

# Change to resume directory
Push-Location $RESUME_DIR

Write-Host "Building resume: $RESUME_FILE" -ForegroundColor Cyan
Write-Host "Output directory: $RESUME_DIR" -ForegroundColor Cyan
Write-Host ""

# Compile LaTeX document
Write-Host "Running pdflatex (first pass)..." -ForegroundColor Yellow
pdflatex -interaction=nonstopmode $RESUME_FILE | Out-Null

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: First pdflatex pass failed!" -ForegroundColor Red
    Pop-Location
    exit 1
}

# Second pass for references
Write-Host "Running pdflatex (second pass)..." -ForegroundColor Yellow
pdflatex -interaction=nonstopmode $RESUME_FILE | Out-Null

if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Second pdflatex pass failed!" -ForegroundColor Red
    Pop-Location
    exit 1
}

# Check if PDF was generated
if (Test-Path "$RESUME_NAME.pdf") {
    $pdfSize = (Get-Item "$RESUME_NAME.pdf").Length
    Write-Host ""
    Write-Host "✓ Success! PDF generated: $RESUME_NAME.pdf ($pdfSize bytes)" -ForegroundColor Green
    
    # Clean up auxiliary files
    Write-Host "Cleaning up auxiliary files..." -ForegroundColor Yellow
    Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.aux"
    Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.log"
    Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.out"
    Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.synctex.gz"
    Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.fdb_latexmk"
    Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.fls"
    
    Write-Host "✓ Cleanup complete!" -ForegroundColor Green
} else {
    Write-Host "Error: PDF file was not generated!" -ForegroundColor Red
    Pop-Location
    exit 1
}

Pop-Location
Write-Host ""
Write-Host "Build completed successfully!" -ForegroundColor Green
