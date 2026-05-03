#!/data/data/com.termux/files/usr/bin/bash

echo "======================================"
echo " Setting up Bug Bounty Recons for Termux... "
echo "======================================"

echo "[*] Updating package list..."
pkg update -y

echo "[*] Installing Node.js..."
pkg install -y nodejs

echo "[*] Navigating to cli directory..."
cd cli || { echo "[-] Failed to find 'cli' directory!"; exit 1; }

echo "[*] Installing dependencies..."
npm install

echo "[*] Linking package globally..."
npm link

echo "======================================"
echo " Setup Complete!                      "
echo "======================================"
echo "You can now run the tool using:"
echo "  $ bbrecon <domain>"
echo ""
echo "To explore the menu interactively, just type:"
echo "  $ bbrecon"
echo "======================================"
