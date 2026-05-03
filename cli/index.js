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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('bbrecon')
  .description('CLI tool for Bug Bounty Reconnaissance')
  .version('1.0.0');

const categories = {
  files: 'Files & Data Exposure',
  vuln: 'Vulnerabilities & Errors',
  cms: 'WordPress & CMS',
  code: 'Code & Third-Party Exposure',
  apikeys: 'API Keys & Secrets',
  infra: 'Infrastructure & Network',
  social: 'Social Media & Leaks',
  osint: 'OSINT Tools',
  native: 'Native CLI Tools',
  web: chalk.yellow('🌐 Open Web Dashboard')
};

async function promptForDomain() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'domain',
      message: 'Enter target domain (e.g., example.com):',
      validate: input => input ? true : 'Domain cannot be empty!'
    }
  ]);
  return answers.domain;
}

async function runNativeTools(domain) {
  const { tool } = await inquirer.prompt([
    {
      type: 'list',
      name: 'tool',
      message: 'Select a native tool:',
      choices: [
        { name: 'DNS Records Lookup (A, AAAA, MX, TXT, NS)', value: 'dns' },
        { name: 'Fetch HTTP Headers', value: 'headers' },
        { name: 'Check URLScan.io API (Basic)', value: 'urlscan' },
        { name: 'Go Back', value: 'back' }
      ]
    }
  ]);

  if (tool === 'back') return;

  console.log(chalk.blue(`\nRunning ${tool} for ${domain}...\n`));

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
        console.log(chalk.yellow(`${k}:`), v);
      });
    } else if (tool === 'urlscan') {
      const res = await axios.get(`https://urlscan.io/api/v1/search/?q=domain:${domain}`);
      if (res.data.results && res.data.results.length > 0) {
        const top = res.data.results[0];
        console.log(chalk.green('Latest Scan Result:'));
        console.log(`URL: ${top.page.url}`);
        console.log(`IP: ${top.page.ip}`);
        console.log(`Server: ${top.page.server}`);
        console.log(`Report: ${top.result}`);
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
        message: `[${chalk.green(domain)}] Select a reconnaissance category:`,
        choices: [
          ...Object.entries(categories).map(([key, value]) => ({ name: value, value: key })),
          { name: chalk.red('Exit'), value: 'exit' }
        ],
        pageSize: 12
      }
    ]);

    if (category === 'exit') {
      console.log(chalk.blue('Goodbye!'));
      process.exit(0);
    }

    if (category === 'web') {
      // Open the local index.html file in the default browser
      const webPath = path.resolve(__dirname, '../web/index.html');
      console.log(chalk.cyan(`Opening Web Dashboard: ${webPath}`));
      await open('file://' + webPath);
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
        message: `Select a tool/dork from ${categories[category]}:`,
        choices: [
          ...categoryDorks.map((d, i) => ({ name: `${chalk.bold(d.name)} - ${chalk.dim(d.desc)}`, value: i })),
          { name: chalk.yellow('← Go Back'), value: -1 }
        ],
        pageSize: 15
      }
    ]);

    if (dorkIndex === -1) continue;

    const selectedDork = categoryDorks[dorkIndex];
    const url = selectedDork.url.replace(/\{T\}/g, encodeURIComponent(domain));
    
    console.log(chalk.cyan(`Opening: ${selectedDork.name}`));
    console.log(chalk.dim(url));
    await open(url);
    console.log();
  }
}

program
  .argument('[domain]', 'Target domain')
  .action(async (domain) => {
    console.log(chalk.bold.blue('\n=== Bug Bounty Recons CLI ===\n'));
    
    if (!domain) {
      domain = await promptForDomain();
    }
    
    await interactiveMenu(domain);
  });

program.parse(process.argv);
