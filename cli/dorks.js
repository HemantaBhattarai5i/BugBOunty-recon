export const dorks = {
  files: [
    { name: 'Directory Listing', desc: 'intitle:index.of', url: 'https://www.google.com/search?q=site:{T}+intitle:index.of' },
    { name: 'Config Files', desc: 'xml,conf,ini,cfg,txt,ora', url: 'https://www.google.com/search?q=site:{T}+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini' },
    { name: 'Database Files', desc: 'sql, dbf, mdb', url: 'https://www.google.com/search?q=site:{T}+ext:sql+|+ext:dbf+|+ext:mdb' },
    { name: 'Log Files', desc: 'Exposed .log files', url: 'https://www.google.com/search?q=site:{T}+ext:log' },
    { name: 'Backup Files', desc: 'bkf, bkp, bak, old', url: 'https://www.google.com/search?q=site:{T}+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup' },
    { name: 'Public Documents', desc: 'doc, pdf, ppt, csv', url: 'https://www.google.com/search?q=site:{T}+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv' },
    { name: 'htaccess / Sensitive', desc: 'phpinfo, .htaccess', url: 'https://www.google.com/search?q=site:{T}+inurl:%22/phpinfo.php%22+|+inurl:%22.htaccess%22' },
    { name: 'Robots.txt', desc: 'Hidden directories', url: 'https://www.google.com/search?q={T}/robots.txt' },
    { name: 'Crossdomain.xml', desc: 'Misconfigured crossdomain', url: 'https://www.google.com/search?q={T}/crossdomain.xml' },
    { name: 'Install/Setup', desc: 'readme, license, setup', url: 'https://www.google.com/search?q=site:{T}+inurl:readme+|+inurl:license+|+inurl:install+|+inurl:setup+|+inurl:config' },
    { name: 'phpinfo()', desc: 'Exposed PHP info', url: 'https://www.google.com/search?q=site:{T}+ext:php+intitle:phpinfo+%22published+by+the+PHP+Group%22' },
    { name: 'Apache Config', desc: 'httpd.conf exposure', url: 'https://www.google.com/search?q=site:{T}+filetype:config+%22apache%22' },
    { name: 'Login Pages', desc: 'login, signin, auth', url: 'https://www.google.com/search?q=site:{T}+inurl:login+|+inurl:signin+|+intitle:Login+|+intitle:signin+|+inurl:auth' },
    { name: 'API / WSDL', desc: 'WSDL, web service files', url: 'https://www.google.com/search?q=site:{T}+filetype:wsdl+|+filetype:WSDL+|+ext:svc+|+inurl:wsdl' },
    { name: '.env Files', desc: 'Exposed env variables', url: 'https://www.google.com/search?q=site:{T}+ext:env+|+intext:DB_PASSWORD' }
  ],
  vuln: [
    { name: 'SQL Errors', desc: 'Syntax errors, warnings', url: 'https://www.google.com/search?q=site:{T}+intext:%22sql+syntax+near%22+|+intext:%22syntax+error+has+occurred%22+|+intext:%22incorrect+syntax+near%22+|+intext:%22unexpected+end+of+SQL+command%22+|+intext:%22Warning:+mysql_connect()%22+|+intext:%22Warning:+mysql_query()%22' },
    { name: 'Open Redirects', desc: 'redir, url, redirect params', url: 'https://www.google.com/search?q=site:{T}+inurl:redir+|+inurl:url+|+inurl:redirect+|+inurl:return+|+inurl:src=http+|+inurl:r=http' },
    { name: 'Backdoors', desc: 'shell, wso, cmd, passwd', url: 'https://www.google.com/search?q=site:{T}+inurl:shell+|+inurl:backdoor+|+inurl:wso+|+inurl:cmd+|+shadow+|+passwd+|+boot.ini' },
    { name: 'Apache Struts RCE', desc: '.action, .do extensions', url: 'https://www.google.com/search?q=site:{T}+ext:action+|+ext:struts+|+ext:do' },
    { name: 'SharePoint RCE', desc: 'CVE-2020-0646', url: 'https://www.google.com/search?q=.sharepoint.com/_vti_bin/webpartpages/asmx+-docs+-msdn+-mdsec+site:{T}' },
    { name: 'SWF Google', desc: 'Flash vulns (Google)', url: 'https://www.google.com/search?q=inurl:{T}+ext:swf' },
    { name: 'Traefik Dashboard', desc: 'Unauthenticated Traefik', url: 'https://www.google.com/search?q=intitle:traefik+inurl:8080/dashboard+%22{T}%22' }
  ],
  cms: [
    { name: 'WP Plugins', desc: 'wp-content, plugins, uploads', url: 'https://www.google.com/search?q=site:{T}+inurl:wp-+|+inurl:wp-content+|+inurl:plugins+|+inurl:uploads+|+inurl:themes+|+inurl:download' },
    { name: 'WP Content/Includes', desc: 'wp-content, wp-includes', url: 'https://www.google.com/search?q=site:{T}+inurl:wp-content+|+inurl:wp-includes' },
    { name: 'What CMS', desc: 'Identify CMS type', url: 'https://whatcms.org/?s={T}' },
    { name: 'WP REST API Users', desc: 'Direct /wp-json/wp/v2/users', url: 'https://{T}/wp-json/wp/v2/users' },
    { name: 'WP xmlrpc.php', desc: 'Direct xmlrpc.php check', url: 'https://{T}/xmlrpc.php' },
    { name: 'WP wp-login.php', desc: 'Direct login page', url: 'https://{T}/wp-login.php' },
    { name: 'WP Database Export', desc: 'Google dork for SQL dumps', url: 'https://www.google.com/search?q=site:{T}+ext:sql+%22wp_users%22+|+%22wp_options%22' },
    { name: 'Joomla Admin', desc: 'Direct /administrator', url: 'https://{T}/administrator/' },
    { name: 'Drupal Admin', desc: 'Direct /user/login', url: 'https://{T}/user/login' }
  ],
  code: [
    { name: 'GitHub', desc: 'Search GitHub repos', url: 'https://github.com/search?q=%22*.{T}%22' },
    { name: 'GitHub Gists', desc: 'Leaked Gist pastes', url: 'https://gist.github.com/search?q=*.%22{T}%22' },
    { name: 'GitLab', desc: 'Search GitLab', url: 'https://www.google.com/search?q=inurl:gitlab+{T}' },
    { name: 'StackOverflow', desc: 'Tech questions', url: 'https://www.google.com/search?q=site:stackoverflow.com+%22{T}%22' },
    { name: 'Pastebin', desc: 'Leaked data on Pastebin', url: 'https://www.google.com/search?q=site:pastebin.com+{T}' },
    { name: '.git Folder', desc: 'Exposed git repos', url: 'https://www.google.com/search?q=inurl:%22/.git+%22+{T}+-github' }
  ],
  apikeys: [
    { name: 'OpenAI sk-proj Keys', desc: 'ChatGPT API keys', url: 'https://www.google.com/search?q=%22sk-proj-%22+%22{T}%22' },
    { name: 'Google API Keys', desc: 'Google Cloud keys', url: 'https://www.google.com/search?q=%22AIza%22+%22{T}%22' },
    { name: 'AWS Access Keys', desc: 'Amazon AWS keys', url: 'https://www.google.com/search?q=%22AKIA%22+%22{T}%22' },
    { name: 'Stripe API Keys', desc: 'Payment keys', url: 'https://www.google.com/search?q=%22sk_live_%22+OR+%22pk_live_%22+%22{T}%22' },
    { name: 'Firebase Keys', desc: 'Firebase config', url: 'https://www.google.com/search?q=%22firebaseio.com%22+%22{T}%22' },
    { name: 'Telegram Bot Tokens', desc: 'Telegram bots', url: 'https://www.google.com/search?q=%22bot%22+%22telegram%22+%22token%22+%22{T}%22' },
    { name: 'JWT Secrets', desc: 'JSON Web Token secrets', url: 'https://www.google.com/search?q=%22jwt%22+%22secret%22+%22{T}%22+ext:json+|+ext:env+|+ext:yaml' }
  ],
  infra: [
    { name: 'Shodan', desc: 'IoT search engine', url: 'https://www.shodan.io/search?query={T}' },
    { name: 'Censys IPv4', desc: 'IP data on Censys', url: 'https://censys.io/ipv4?q={T}' },
    { name: 'Censys Domains', desc: 'Domain search', url: 'https://censys.io/domain?q={T}' },
    { name: 'Subdomains', desc: 'Google subdomain search', url: 'https://www.google.com/search?q=site:*.{T}' },
    { name: 'S3 Buckets', desc: 'Open S3 buckets', url: 'https://www.google.com/search?q=site:.s3.amazonaws.com+%22{T}%22' },
    { name: 'Wayback Machine', desc: 'Archived pages', url: 'https://web.archive.org/web/*/{T}/*' },
    { name: 'Security Headers', desc: 'Check headers', url: 'https://securityheaders.com/?q={T}&followRedirects=on' }
  ],
  social: [
    { name: 'LinkedIn Employees', desc: 'Employee enumeration', url: 'https://www.google.com/search?q=site:linkedin.com+employees+{T}' },
    { name: 'Reddit', desc: 'Discussions about target', url: 'https://www.reddit.com/search/?q={T}' },
    { name: 'YouTube', desc: 'Videos about target', url: 'https://www.youtube.com/results?search_query={T}' },
    { name: 'OpenBugBounty', desc: 'Public security issues', url: 'https://www.openbugbounty.org/search/?search={T}' },
    { name: 'Password Leaks', desc: 'Plaintext passwords', url: 'https://www.google.com/search?q=site:throwbin.io+{T}+password' },
    { name: 'Email Harvest', desc: 'Find email addresses', url: 'https://www.google.com/search?q=%22@{T}%22+email' },
    { name: 'GitHub People', desc: 'GitHub user search', url: 'https://github.com/search?q=%22{T}%22&type=users' }
  ],
  osint: [
    { name: 'URLScan.io Browse', desc: 'Open in URLScan', url: 'https://urlscan.io/search/#domain:{T}' },
    { name: 'VirusTotal', desc: 'Malware & reputation', url: 'https://www.virustotal.com/gui/domain/{T}' },
    { name: 'BuiltWith', desc: 'Technology profiler', url: 'https://builtwith.com/{T}' },
    { name: 'DNSDumpster', desc: 'DNS recon', url: 'https://dnsdumpster.com/' },
    { name: 'WHOIS Lookup', desc: 'Domain WHOIS data', url: 'https://www.whois.com/whois/{T}' },
    { name: 'IPinfo.io', desc: 'IP geolocation & ASN', url: 'https://ipinfo.io/{T}' },
    { name: 'Hunter.io', desc: 'Find company emails', url: 'https://hunter.io/search/{T}' },
    { name: 'Have I Been Pwned', desc: 'Breach check (HIBP)', url: 'https://haveibeenpwned.com/DomainSearch/{T}' }
  ]
};
