#!/bin/bash

echo "======================================"
echo " Setting up Bug Bounty Recons CLI...  "
echo "======================================"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "[-] npm is not installed. Please install Node.js and npm first."
    exit 1
fi

echo "[*] Navigating to cli directory..."
cd cli || { echo "[-] Failed to find 'cli' directory!"; exit 1; }

echo "[*] Installing dependencies..."
npm install

echo "[*] Linking package globally..."
npm link

echo "======================================"
echo " Setup Complete!                      "
echo "======================================"
echo "You can now run the tool from anywhere using:"
echo "  $ bbrecon <domain>"
echo ""
echo "To explore the menu interactively, just type:"
echo "  $ bbrecon"
echo ""
echo "You can also access the Web Dashboard directly from the CLI menu!"
echo "======================================"
