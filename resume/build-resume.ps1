#!/usr/bin/env pwsh
# Script to compile LaTeX resume to PDF

param(
    [Parameter(Position=0)]
    [ValidateSet("2024", "2025", "all")]
    [string]$Version = "2025"
)

# Configuration
$MIKTEX_BIN = "C:\Program Files\MiKTeX\miktex\bin\x64"
$RESUME_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path

# Determine which files to build
$RESUME_FILES = @()
if ($Version -eq "all") {
    $RESUME_FILES = @("resume_2024.tex", "resume_2025.tex")
} else {
    $RESUME_FILES = @("resume_$Version.tex")
}

# Add MiKTeX to PATH for this session
$env:Path = "$MIKTEX_BIN;$env:Path"

# Change to resume directory
Push-Location $RESUME_DIR

Write-Host "Building resume(s) for version: $Version" -ForegroundColor Cyan
Write-Host "Output directory: $RESUME_DIR" -ForegroundColor Cyan
Write-Host ""

$successCount = 0
$failCount = 0

foreach ($RESUME_FILE in $RESUME_FILES) {
    $RESUME_NAME = [System.IO.Path]::GetFileNameWithoutExtension($RESUME_FILE)
    
    Write-Host "===========================================" -ForegroundColor Magenta
    Write-Host "Building: $RESUME_FILE" -ForegroundColor Cyan
    Write-Host "===========================================" -ForegroundColor Magenta
    Write-Host ""

    # Compile LaTeX document
    Write-Host "Running pdflatex (first pass)..." -ForegroundColor Yellow
    pdflatex -interaction=nonstopmode $RESUME_FILE | Out-Null

    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error: First pdflatex pass failed for $RESUME_FILE!" -ForegroundColor Red
        $failCount++
        continue
    }

    # Second pass for references
    Write-Host "Running pdflatex (second pass)..." -ForegroundColor Yellow
    pdflatex -interaction=nonstopmode $RESUME_FILE | Out-Null

    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error: Second pdflatex pass failed for $RESUME_FILE!" -ForegroundColor Red
        $failCount++
        continue
    }

    # Check if PDF was generated
    if (Test-Path "$RESUME_NAME.pdf") {
        $pdfSize = (Get-Item "$RESUME_NAME.pdf").Length
        Write-Host ""
        Write-Host "Success! PDF generated: $RESUME_NAME.pdf ($pdfSize bytes)" -ForegroundColor Green
        
        # Clean up auxiliary files
        Write-Host "Cleaning up auxiliary files..." -ForegroundColor Yellow
        Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.aux"
        Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.log"
        Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.out"
        Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.synctex.gz"
        Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.fdb_latexmk"
        Remove-Item -ErrorAction SilentlyContinue "$RESUME_NAME.fls"
        
        Write-Host "Cleanup complete!" -ForegroundColor Green
        $successCount++
    } else {
        Write-Host "Error: PDF file was not generated for $RESUME_FILE!" -ForegroundColor Red
        $failCount++
    }
    
    Write-Host ""
}

Pop-Location

# Summary
Write-Host "===========================================" -ForegroundColor Magenta
Write-Host "Build Summary" -ForegroundColor Cyan
Write-Host "===========================================" -ForegroundColor Magenta
Write-Host "Successful: $successCount" -ForegroundColor Green
Write-Host "Failed: $failCount" -ForegroundColor $(if ($failCount -gt 0) { "Red" } else { "Green" })
Write-Host ""

if ($failCount -gt 0) {
    Write-Host "Build completed with errors!" -ForegroundColor Red
    exit 1
} else {
    Write-Host "All builds completed successfully!" -ForegroundColor Green
}
