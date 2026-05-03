# Bug Bounty Recons CLI

This is the command-line interface version of the Bug Bounty Recons dashboard. It includes all the Google Dorks and OSINT links from the web version, plus new Native CLI Tools that run directly from your terminal.

## Installation

1. Navigate to the `cli` directory:
   ```bash
   cd cli
   ```
2. Install the dependencies (already done if you're reading this, but good to know):
   ```bash
   npm install
   ```
3. Link the package globally so you can run it from anywhere:
   ```bash
   npm link
   ```

## Usage

You can launch the interactive menu by simply typing:
```bash
bbrecon
```
Or you can pass the target domain directly:
```bash
bbrecon example.com
```

## Features
- **All 70+ Dorks**: Neatly categorized into Files, Vulns, CMS, API Keys, Infra, and Social.
- **Native CLI Tools**: 
  - **DNS Records Lookup**: Automatically resolves A, AAAA, MX, TXT, and NS records right in your terminal.
  - **HTTP Headers**: Fetches and formats the HTTP response headers of the target.
  - **URLScan API**: Queries URLScan.io and prints the latest report directly to your console.
- **Browser Automation**: Selecting a dork will automatically construct the payload and open it in your default web browser.
