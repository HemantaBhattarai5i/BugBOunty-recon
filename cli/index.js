#!/usr/bin/env node
import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import open from 'open';
import dns from 'dns/promises';
import { dorks } from './dorks.js';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('bbrecon')
  .description('Advanced CLI tool for Bug Bounty Reconnaissance')
  .version('1.0.0');

const categories = {
  files: '📂 Files & Data Exposure',
  vuln: '⚠️ Vulnerabilities & Errors',
  cms: '📝 WordPress & CMS',
  code: '💻 Code & Third-Party Exposure',
  apikeys: '🔑 API Keys & Secrets',
  infra: '🌐 Infrastructure & Network',
  social: '👥 Social Media & Leaks',
  osint: '🔍 OSINT Tools',
  native: '⚡ Native CLI Tools',
  web: chalk.cyan.bold('🖥️  Start Local Web Dashboard')
};

let serverInstance = null;

function printBanner() {
  console.clear();
  const banner = `
______            ______  _____             _          ______                     
| ___ \\           | ___ \\|  _  |           | |         | ___ \\                    
| |_/ /_   _  __ _| |_/ /| | | |_   _ _ __ | |_ _   _  | |_/ /___  ___ ___  _ __  
| ___ \\ | | |/ _\` | ___ \\| | | | | | | '_ \\| __| | | | |    // _ \\/ __/ _ \\| '_ \\ 
| |_/ / |_| | (_| | |_/ /\\ \\_/ / |_| | | | | |_| |_| | | |\\ \\  __/ (_| (_) | | | |
\\____/ \\__,_|\\__, \\____/  \\___/ \\__,_|_| |_|\\__|\\__, | \\_| \\_\\___|\\___\\___/|_| |_|
              __/ |                              __/ |                            
             |___/                              |___/                              
`;
  console.log(chalk.red.bold(banner));
  console.log(chalk.bold.yellow('                  Advanced Bug Bounty Reconnaissance Toolkit'));
  console.log(chalk.dim('                  --------------------------------------------\n'));
}

async function promptForDomain() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'domain',
      message: chalk.cyan('Enter target domain (e.g., example.com):'),
      validate: input => input ? true : 'Domain cannot be empty!'
    }
  ]);
  return answers.domain;
}

async function startWebServer() {
  if (serverInstance) {
    console.log(chalk.cyan(`\n[+] Web Dashboard already running at `) + chalk.white.bold('http://localhost:8080') + `\n`);
    try { await open('http://localhost:8080'); } catch(e) {}
    return;
  }

  return new Promise((resolve) => {
    const app = express();
    const webPath = path.resolve(__dirname, '../web');
    app.use(express.static(webPath));

    serverInstance = http.createServer(app);
    serverInstance.listen(8080, async () => {
      console.log(chalk.green(`\n[+] HTTP Server started successfully!`));
      console.log(chalk.cyan(`[+] Web Dashboard is now live at: `) + chalk.white.bold('http://localhost:8080'));
      console.log(chalk.yellow(`[!] Keep this terminal open while using the dashboard.\n`));
      try {
        await open('http://localhost:8080');
      } catch (e) {
        console.log(chalk.dim('Open the link manually in your browser (Termux users).'));
      }
      resolve();
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(chalk.red(`\n[-] Port 8080 is already in use. Please close other servers or try again.\n`));
      } else {
        console.log(chalk.red(`\n[-] Error starting server: ${err.message}\n`));
      }
      resolve();
    });
  });
}

async function runNativeTools(domain) {
  const { tool } = await inquirer.prompt([
    {
      type: 'list',
      name: 'tool',
      message: chalk.magenta('Select an advanced native tool:'),
      choices: [
        { name: '🌐 DNS Records Lookup (A, AAAA, MX, TXT, NS)', value: 'dns' },
        { name: '📦 Fetch HTTP Response Headers', value: 'headers' },
        { name: '🔎 Check URLScan.io API (Latest Report)', value: 'urlscan' },
        new inquirer.Separator(),
        { name: chalk.yellow('← Go Back'), value: 'back' }
      ]
    }
  ]);

  if (tool === 'back') return;

  console.log(chalk.blue.bold(`\nExecuting [${tool}] for ${domain}...\n`));

  try {
    if (tool === 'dns') {
      const records = ['A', 'AAAA', 'MX', 'TXT', 'NS'];
      for (const type of records) {
        try {
          const res = await dns.resolve(domain, type);
          console.log(chalk.green(`[${type}]`), res);
        } catch (e) {
          console.log(chalk.red(`[${type}]`), e.code === 'ENODATA' ? 'No records found' : e.message);
        }
      }
    } else if (tool === 'headers') {
      const res = await axios.head(`https://${domain}`).catch(e => e.response || { headers: { error: e.message }});
      Object.entries(res.headers).forEach(([k, v]) => {
        console.log(chalk.yellow.bold(`${k}:`), chalk.white(v));
      });
    } else if (tool === 'urlscan') {
      const res = await axios.get(`https://urlscan.io/api/v1/search/?q=domain:${domain}`);
      if (res.data.results && res.data.results.length > 0) {
        const top = res.data.results[0];
        console.log(chalk.green.bold('Latest Scan Result:'));
        console.log(chalk.cyan(`URL:    `) + top.page.url);
        console.log(chalk.cyan(`IP:     `) + top.page.ip);
        console.log(chalk.cyan(`Server: `) + top.page.server);
        console.log(chalk.cyan(`Report: `) + top.result);
      } else {
        console.log(chalk.yellow('No recent scans found on URLScan.io'));
      }
    }
  } catch (error) {
    console.log(chalk.red(`Error running tool: ${error.message}`));
  }
  console.log();
}

async function interactiveMenu(domain) {
  while (true) {
    const { category } = await inquirer.prompt([
      {
        type: 'list',
        name: 'category',
        message: `Target: [${chalk.green.bold(domain)}] - Select a Recon Category:`,
        choices: [
          ...Object.entries(categories).map(([key, value]) => ({ name: value, value: key })),
          new inquirer.Separator(),
          { name: chalk.red.bold('❌ Exit'), value: 'exit' }
        ],
        pageSize: 14
      }
    ]);

    if (category === 'exit') {
      console.log(chalk.blue.bold('\nGoodbye! Happy Hunting. 🛡️\n'));
      if (serverInstance) process.exit(0);
      return;
    }

    if (category === 'web') {
      await startWebServer();
      continue;
    }

    if (category === 'native') {
      await runNativeTools(domain);
      continue;
    }

    const categoryDorks = dorks[category];
    const { dorkIndex } = await inquirer.prompt([
      {
        type: 'list',
        name: 'dorkIndex',
        message: `Select a tool/dork from [${categories[category].replace(/<[^>]*>?/gm, '')}]:`,
        choices: [
          ...categoryDorks.map((d, i) => ({ name: `${chalk.bold(d.name)} - ${chalk.dim(d.desc)}`, value: i })),
          new inquirer.Separator(),
          { name: chalk.yellow('← Go Back'), value: -1 }
        ],
        pageSize: 15
      }
    ]);

    if (dorkIndex === -1) continue;

    const selectedDork = categoryDorks[dorkIndex];
    const url = selectedDork.url.replace(/\{T\}/g, encodeURIComponent(domain));
    
    console.log(chalk.cyan(`\n[+] Opening: `) + chalk.bold.white(selectedDork.name));
    console.log(chalk.dim(url));
    try {
      await open(url);
    } catch (e) {
      console.log(chalk.dim('\nCould not automatically open browser. Copy and paste the URL above.'));
    }
    console.log();
  }
}

program
  .argument('[domain]', 'Target domain')
  .action(async (domain) => {
    printBanner();
    
    if (!domain) {
      domain = await promptForDomain();
      console.log();
    }
    
    await interactiveMenu(domain);
    process.exit(0);
  });

program.parse(process.argv);
