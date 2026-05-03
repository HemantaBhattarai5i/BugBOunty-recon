# Bug Bounty Recons

Bug Bounty Recons is a powerful, unified reconnaissance dashboard and CLI tool that aggregates over 70+ OSINT, GitHub, and Google Dorking techniques. It allows security researchers to instantly query target domains for exposed files, CMS vulnerabilities, API keys, and much more.

## Features
- **Web Dashboard:** A sleek, mobile-responsive static web app (dark mode).
- **Interactive CLI:** A gorgeous terminal interface via Node.js.
- **Native CLI Tools:** Perform DNS Lookups, HTTP Header fetching, and URLScan API checks natively inside your terminal.
- **70+ Dorks & Integrations:** Instantly scan for exposed `.env` files, SQL errors, WordPress endpoints, leaked AWS/OpenAI keys, and more.

---

## 💻 Installation on PC (Windows/Linux/Mac)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HemantaBhattarai5i/BugBOunty-Recon.git
   cd BugBOunty-Recon
   ```

2. **Run the setup script:**
   * **For Windows:** Double click `setup.bat` or run:
     ```cmd
     setup.bat
     ```
   * **For Linux/Mac:**
     ```bash
     chmod +x setup.sh
     ./setup.sh
     ```

3. **Start the tool:**
   ```bash
   bbrecon
   ```
   *(Or just `bbrecon example.com` to skip the domain prompt!)*

---

## 📱 Installation on Android (Termux)

You can easily run this tool on your phone using Termux!

1. **Install Git and clone the repository:**
   ```bash
   pkg install git -y
   git clone https://github.com/HemantaBhattarai5i/BugBOunty-Recon.git
   cd BugBOunty-Recon
   ```

2. **Run the automatic Termux setup script:**
   This script will automatically install Node.js and configure everything.
   ```bash
   chmod +x setup-termux.sh
   ./setup-termux.sh
   ```

3. **Start the tool:**
   ```bash
   bbrecon
   ```

---

## Starting the Web Dashboard
You can access the beautiful static Web Dashboard at any time by simply opening `web/index.html` in your browser.

Alternatively, launch the CLI using `bbrecon` and select **"🌐 Open Web Dashboard"** from the main menu!
