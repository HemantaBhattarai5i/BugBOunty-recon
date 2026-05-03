let scanCount = 0;

// SVG Icons
const ico = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const I = {
  file: ico('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>'),
  folder: ico('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'),
  db: ico('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'),
  log: ico('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
  save: ico('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>'),
  lock: ico('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),
  key: ico('<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>'),
  alert: ico('<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
  code: ico('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'),
  globe: ico('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'),
  search: ico('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
  server: ico('<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>'),
  shield: ico('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
  user: ico('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
  link: ico('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
  git: ico('<circle cx="12" cy="12" r="3"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/>'),
  cloud: ico('<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>'),
  eye: ico('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
  ext: ico('<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>'),
  zap: ico('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
  mail: ico('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
  clock: ico('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
  cpu: ico('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>')
};

// Application logic
function getDomain() {
  const d = document.getElementById('targetDomain').value.trim();
  if (!d) { alert('Enter a target domain first!'); return null; }
  return d;
}

function openDork(url) {
  const d = getDomain();
  if (!d) return;
  scanCount++;
  document.getElementById('scanCount').textContent = scanCount;
  window.open(url.replace(/{T}/g, encodeURIComponent(d)), '_blank');
}

// API key dorks — domain is optional
function openApiDork(url) {
  const d = document.getElementById('targetDomain').value.trim();
  scanCount++;
  document.getElementById('scanCount').textContent = scanCount;
  if (d) {
    window.open(url.replace(/{T}/g, encodeURIComponent(d)), '_blank');
  } else {
    window.open(url.replace(/\+%22\{T\}%22/g, '').replace(/\+\{T\}/g, '').replace(/%22\{T\}%22\+/g, '').replace(/\{T\}/g, ''), '_blank');
  }
}

function setTarget() {
  const d = getDomain();
  if (!d) return;
  document.getElementById('urlscanInput').value = d;
}

function switchTab(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
}

// DORK DATA
const D = {
  files: [
    [I.folder,'Directory Listing','intitle:index.of','https://www.google.com/search?q=site:{T}+intitle:index.of'],
    [I.file,'Config Files','xml,conf,ini,cfg,txt,ora','https://www.google.com/search?q=site:{T}+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini'],
    [I.db,'Database Files','sql, dbf, mdb','https://www.google.com/search?q=site:{T}+ext:sql+|+ext:dbf+|+ext:mdb'],
    [I.log,'Log Files','Exposed .log files','https://www.google.com/search?q=site:{T}+ext:log'],
    [I.save,'Backup Files','bkf, bkp, bak, old','https://www.google.com/search?q=site:{T}+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup'],
    [I.ext,'Public Documents','doc, pdf, ppt, csv','https://www.google.com/search?q=site:{T}+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv'],
    [I.lock,'htaccess / Sensitive','phpinfo, .htaccess','https://www.google.com/search?q=site:{T}+inurl:%22/phpinfo.php%22+|+inurl:%22.htaccess%22'],
    [I.eye,'Robots.txt','Hidden directories','https://www.google.com/search?q={T}/robots.txt'],
    [I.globe,'Crossdomain.xml','Misconfigured crossdomain','https://www.google.com/search?q={T}/crossdomain.xml'],
    [I.file,'Install/Setup','readme, license, setup','https://www.google.com/search?q=site:{T}+inurl:readme+|+inurl:license+|+inurl:install+|+inurl:setup+|+inurl:config'],
    [I.code,'phpinfo()','Exposed PHP info','https://www.google.com/search?q=site:{T}+ext:php+intitle:phpinfo+%22published+by+the+PHP+Group%22'],
    [I.server,'Apache Config','httpd.conf exposure','https://www.google.com/search?q=site:{T}+filetype:config+%22apache%22'],
    [I.lock,'Login Pages','login, signin, auth','https://www.google.com/search?q=site:{T}+inurl:login+|+inurl:signin+|+intitle:Login+|+intitle:signin+|+inurl:auth'],
    [I.link,'API / WSDL','WSDL, web service files','https://www.google.com/search?q=site:{T}+filetype:wsdl+|+filetype:WSDL+|+ext:svc+|+inurl:wsdl'],
    [I.key,'.env Files','Exposed env variables','https://www.google.com/search?q=site:{T}+ext:env+|+intext:DB_PASSWORD']
  ],
  vuln: [
    [I.alert,'SQL Errors','Syntax errors, warnings','https://www.google.com/search?q=site:{T}+intext:%22sql+syntax+near%22+|+intext:%22syntax+error+has+occurred%22+|+intext:%22incorrect+syntax+near%22+|+intext:%22unexpected+end+of+SQL+command%22+|+intext:%22Warning:+mysql_connect()%22+|+intext:%22Warning:+mysql_query()%22'],
    [I.link,'Open Redirects','redir, url, redirect params','https://www.google.com/search?q=site:{T}+inurl:redir+|+inurl:url+|+inurl:redirect+|+inurl:return+|+inurl:src=http+|+inurl:r=http'],
    [I.alert,'Backdoors','shell, wso, cmd, passwd','https://www.google.com/search?q=site:{T}+inurl:shell+|+inurl:backdoor+|+inurl:wso+|+inurl:cmd+|+shadow+|+passwd+|+boot.ini'],
    [I.zap,'Apache Struts RCE','.action, .do extensions','https://www.google.com/search?q=site:{T}+ext:action+|+ext:struts+|+ext:do'],
    [I.zap,'SharePoint RCE','CVE-2020-0646','https://www.google.com/search?q=.sharepoint.com/_vti_bin/webpartpages/asmx+-docs+-msdn+-mdsec+site:{T}'],
    [I.ext,'SWF Google','Flash vulns (Google)','https://www.google.com/search?q=inurl:{T}+ext:swf'],
    [I.ext,'SWF Yandex','Flash vulns (Yandex)','https://yandex.com/search/?text=site:{T}+mime:swf'],
    [I.clock,'SWF Wayback','Archived Flash files','https://web.archive.org/cdx/search?url={T}/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*swf&limit=100000'],
    [I.server,'Traefik Dashboard','Unauthenticated Traefik','https://www.google.com/search?q=intitle:traefik+inurl:8080/dashboard+%22{T}%22']
  ],
  cms: [
    [I.code,'WP Plugins','wp-content, plugins, uploads','https://www.google.com/search?q=site:{T}+inurl:wp-+|+inurl:wp-content+|+inurl:plugins+|+inurl:uploads+|+inurl:themes+|+inurl:download'],
    [I.code,'WP Content/Includes','wp-content, wp-includes','https://www.google.com/search?q=site:{T}+inurl:wp-content+|+inurl:wp-includes'],
    [I.clock,'WP Wayback','Archived WP files','http://wwwb-dedup.us.archive.org:8083/cdx/search?url={T}/&matchType=domain&collapse=digest&output=text&fl=original,timestamp&filter=urlkey:.*wp[-].*&limit=1000000&xx='],
    [I.search,'What CMS','Identify CMS type','https://whatcms.org/?s={T}'],
    [I.user,'WP REST API Users','Direct /wp-json/wp/v2/users','https://{T}/wp-json/wp/v2/users'],
    [I.user,'WP User Enum ?author=','Direct ?author=1 enum','https://{T}/?author=1'],
    [I.alert,'WP xmlrpc.php','Direct xmlrpc.php check','https://{T}/xmlrpc.php'],
    [I.log,'WP debug.log','Direct debug.log access','https://{T}/wp-content/debug.log'],
    [I.key,'WP wp-config Backup','Direct wp-config.php~','https://{T}/wp-config.php~'],
    [I.file,'WP readme.html','Direct version disclosure','https://{T}/readme.html'],
    [I.zap,'WP upgrade.php','Direct upgrade script','https://{T}/wp-admin/upgrade.php'],
    [I.zap,'WP install.php','Direct install script','https://{T}/wp-admin/install.php'],
    [I.clock,'WP wp-cron.php','Direct cron endpoint','https://{T}/wp-cron.php'],
    [I.lock,'WP wp-login.php','Direct login page','https://{T}/wp-login.php'],
    [I.db,'WP Database Export','Google dork for SQL dumps','https://www.google.com/search?q=site:{T}+ext:sql+%22wp_users%22+|+%22wp_options%22'],
    [I.folder,'WP Uploads Dir','Direct uploads directory','https://{T}/wp-content/uploads/'],
    [I.ext,'WP Plugin Dir','Direct plugins directory','https://{T}/wp-content/plugins/'],
    [I.shield,'WP REST API Full','Direct /wp-json/ routes','https://{T}/wp-json/'],
    [I.file,'WP License.txt','Direct license.txt','https://{T}/license.txt'],
    [I.code,'WP Theme Editor','Direct theme-editor.php','https://{T}/wp-admin/theme-editor.php'],
    [I.file,'WP wp-config.txt','Direct wp-config.txt','https://{T}/wp-config.txt'],
    [I.file,'WP wp-config.bak','Direct wp-config.bak','https://{T}/wp-config.php.bak'],
    [I.shield,'WP REST Users V2','Direct /wp/v2/users?per_page=100','https://{T}/wp-json/wp/v2/users?per_page=100'],
    [I.folder,'WP Themes Dir','Direct themes directory','https://{T}/wp-content/themes/'],
    [I.user,'WP User ?author=2','Direct author enum #2','https://{T}/?author=2'],
    [I.shield,'WP REST v2 Posts','Direct /wp/v2/posts','https://{T}/wp-json/wp/v2/posts'],
    [I.shield,'WP REST v2 Pages','Direct /wp/v2/pages','https://{T}/wp-json/wp/v2/pages'],
    [I.shield,'WP REST v2 Media','Direct /wp/v2/media','https://{T}/wp-json/wp/v2/media'],
    [I.shield,'WP REST v2 Comments','Direct /wp/v2/comments','https://{T}/wp-json/wp/v2/comments'],
    [I.shield,'WP REST v2 Categories','Direct /wp/v2/categories','https://{T}/wp-json/wp/v2/categories'],
    [I.shield,'WP REST v2 Tags','Direct /wp/v2/tags','https://{T}/wp-json/wp/v2/tags'],
    [I.shield,'WP REST v2 Search','Direct /wp/v2/search','https://{T}/wp-json/wp/v2/search'],
    [I.shield,'WP REST v2 Settings','Direct /wp/v2/settings','https://{T}/wp-json/wp/v2/settings'],
    [I.link,'WP oEmbed','Direct /oembed/1.0/embed','https://{T}/wp-json/oembed/1.0/embed?url=https://{T}/'],
    [I.key,'WP wp-config.old','Direct old config','https://{T}/wp-config.php.old'],
    [I.key,'WP wp-config.save','Direct save config','https://{T}/wp-config.php.save'],
    [I.code,'WP Plugin Editor','Direct plugin-editor','https://{T}/wp-admin/plugin-editor.php'],
    [I.ext,'WP wp-signup.php','Direct signup page','https://{T}/wp-signup.php'],
    [I.ext,'WP wp-register.php','Direct register page','https://{T}/wp-register.php'],
    [I.link,'WP wp-links-opml','Direct OPML export','https://{T}/wp-links-opml.php'],
    [I.file,'WP wp-sitemap.xml','Direct WP sitemap','https://{T}/wp-sitemap.xml'],
    [I.file,'WP sitemap.xml','Direct sitemap','https://{T}/sitemap.xml'],
    [I.file,'WP sitemap_index','Direct sitemap index','https://{T}/sitemap_index.xml'],
    [I.db,'WP wp-admin/export','Direct export page','https://{T}/wp-admin/export.php'],
    [I.log,'WP error_log','Direct error_log','https://{T}/error_log'],
    [I.log,'WP php_error.log','Direct php_error','https://{T}/php_error.log'],
    [I.file,'WP .htaccess','Direct htaccess','https://{T}/.htaccess'],
    [I.file,'WP robots.txt','Direct robots.txt','https://{T}/robots.txt'],
    [I.key,'WP .env File','Direct .env','https://{T}/.env'],
    [I.folder,'WP backup Dir','Direct backup dir','https://{T}/backup/'],
    [I.folder,'WP backups Dir','Direct backups dir','https://{T}/backups/'],
    [I.shield,'WPScan Check','WPScan online','https://wpscan.com/search/{T}'],
    [I.server,'Joomla Admin','Direct /administrator','https://{T}/administrator/'],
    [I.file,'Joomla Config','Direct configuration.php~','https://{T}/configuration.php~'],
    [I.shield,'Joomla API','Direct /api v1 config','https://{T}/api/index.php/v1/config/application?public=true'],
    [I.server,'Drupal Admin','Direct /user/login','https://{T}/user/login'],
    [I.file,'Drupal CHANGELOG','Direct CHANGELOG.txt','https://{T}/CHANGELOG.txt'],
    [I.shield,'Drupal jsonapi','Direct /jsonapi','https://{T}/jsonapi'],
    [I.user,'Drupal Users JSON','Direct /jsonapi/user/user','https://{T}/jsonapi/user/user'],
    [I.server,'Admin /admin','Direct /admin','https://{T}/admin'],
    [I.lock,'phpMyAdmin','Direct /phpmyadmin','https://{T}/phpmyadmin/'],
    [I.lock,'Adminer','Direct /adminer.php','https://{T}/adminer.php'],
    [I.server,'cPanel','Direct /cpanel','https://{T}/cpanel'],
    [I.file,'.git/HEAD','Direct git HEAD','https://{T}/.git/HEAD'],
    [I.file,'.git/config','Direct git config','https://{T}/.git/config'],
    [I.folder,'.svn/entries','Direct svn entries','https://{T}/.svn/entries'],
    [I.file,'.DS_Store','Direct DS_Store','https://{T}/.DS_Store'],
    [I.file,'server-status','Apache status page','https://{T}/server-status'],
    [I.file,'server-info','Apache info page','https://{T}/server-info'],
    [I.file,'phpinfo.php','Direct phpinfo','https://{T}/phpinfo.php'],
    [I.file,'security.txt','Direct security.txt','https://{T}/.well-known/security.txt'],
    [I.file,'crossdomain.xml','Direct crossdomain','https://{T}/crossdomain.xml'],
    [I.file,'elmah.axd','Direct ELMAH logs','https://{T}/elmah.axd'],
    [I.folder,'OpenID Config','Direct openid-config','https://{T}/.well-known/openid-configuration'],
    [I.server,'GraphQL','Direct /graphql','https://{T}/graphql'],
    [I.server,'Swagger UI','Direct /swagger','https://{T}/swagger/'],
    [I.server,'API Docs','Direct /api-docs','https://{T}/api-docs/'],
    [I.server,'Actuator','Spring actuator','https://{T}/actuator'],
    [I.server,'Actuator Env','Direct /actuator/env','https://{T}/actuator/env']
  ],
  code: [
    [I.git,'GitHub','Search GitHub repos','https://github.com/search?q=%22*.{T}%22'],
    [I.code,'GitHub Gists','Leaked Gist pastes','https://gist.github.com/search?q=*.%22{T}%22'],
    [I.git,'GitLab','Search GitLab','https://www.google.com/search?q=inurl:gitlab+{T}'],
    [I.code,'Bitbucket & Atlassian','Source code leaks','https://www.google.com/search?q=site:atlassian.net+|+site:bitbucket.org+%22{T}%22'],
    [I.code,'StackOverflow','Tech questions','https://www.google.com/search?q=site:stackoverflow.com+%22{T}%22'],
    [I.link,'3rd Party Code','Codepen, Repl.it, JSFiddle','https://www.google.com/search?q=site:ideone.com+|+site:codebeautify.org+|+site:codeshare.io+|+site:codepen.io+|+site:repl.it+|+site:justpaste.it+|+site:pastebin.com+|+site:jsfiddle.net+|+site:trello.com+%22{T}%22'],
    [I.file,'Pastebin','Leaked data on Pastebin','https://www.google.com/search?q=site:pastebin.com+{T}'],
    [I.file,'Throwbin','Password leaks','https://www.google.com/search?q=site:throwbin.io+{T}'],
    [I.folder,'.git Folder','Exposed git repos','https://www.google.com/search?q=inurl:%22/.git+%22+{T}+-github']
  ],
  apikeys: [
    [I.key,'OpenAI sk-proj Keys','ChatGPT API keys','https://www.google.com/search?q=%22sk-proj-%22+%22{T}%22'],
    [I.key,'OpenAI sk- Keys','Legacy OpenAI keys','https://www.google.com/search?q=%22sk-ant-%22+OR+%22sk-live-%22+OR+%22sk-test-%22+%22{T}%22'],
    [I.key,'Anthropic API Keys','Claude AI keys','https://www.google.com/search?q=%22sk-ant-%22+%22{T}%22'],
    [I.key,'Google API Keys','Google Cloud keys','https://www.google.com/search?q=%22AIza%22+%22{T}%22'],
    [I.key,'AWS Access Keys','Amazon AWS keys','https://www.google.com/search?q=%22AKIA%22+%22{T}%22'],
    [I.key,'Stripe API Keys','Payment keys','https://www.google.com/search?q=%22sk_live_%22+OR+%22pk_live_%22+%22{T}%22'],
    [I.key,'Twilio API Keys','SMS/Voice keys','https://www.google.com/search?q=%22twilio%22+%22SK%22+%22{T}%22'],
    [I.key,'SendGrid Keys','Email API keys','https://www.google.com/search?q=%22SG.%22+%22{T}%22+%22sendgrid%22'],
    [I.key,'Slack Tokens','Slack bot tokens','https://www.google.com/search?q=%22xoxb-%22+OR+%22xoxp-%22+%22{T}%22'],
    [I.key,'Mailgun Keys','Mailgun API keys','https://www.google.com/search?q=%22key-%22+%22mailgun%22+%22{T}%22'],
    [I.key,'Firebase Keys','Firebase config','https://www.google.com/search?q=%22firebaseio.com%22+%22{T}%22'],
    [I.key,'Heroku API Keys','Heroku credentials','https://www.google.com/search?q=%22heroku%22+%22api_key%22+%22{T}%22'],
    [I.key,'Azure Keys','Microsoft Azure','https://www.google.com/search?q=%22azure%22+%22key%22+%22{T}%22+ext:json+|+ext:yaml+|+ext:env'],
    [I.key,'Telegram Bot Tokens','Telegram bots','https://www.google.com/search?q=%22bot%22+%22telegram%22+%22token%22+%22{T}%22'],
    [I.key,'Private Keys','RSA/SSH private keys','https://www.google.com/search?q=%22BEGIN+RSA+PRIVATE+KEY%22+%22{T}%22'],
    [I.key,'JWT Secrets','JSON Web Token secrets','https://www.google.com/search?q=%22jwt%22+%22secret%22+%22{T}%22+ext:json+|+ext:env+|+ext:yaml']
  ],
  ghsecrets: [
    [I.git,'GitHub OpenAI Keys','sk-proj on GitHub','https://github.com/search?q=%22sk-proj-%22+%22{T}%22&type=code'],
    [I.git,'GitHub AWS Keys','AKIA on GitHub','https://github.com/search?q=%22AKIA%22+%22{T}%22&type=code'],
    [I.git,'GitHub Private Keys','RSA keys on GitHub','https://github.com/search?q=%22BEGIN+RSA+PRIVATE+KEY%22+%22{T}%22&type=code'],
    [I.git,'GitHub .env Files','env files on GitHub','https://github.com/search?q=filename:.env+%22{T}%22&type=code'],
    [I.git,'GitHub Passwords','password in config','https://github.com/search?q=%22password%22+%22{T}%22+filename:config&type=code'],
    [I.git,'GitHub DB Strings','Connection strings','https://github.com/search?q=%22mongodb+srv%22+OR+%22postgres://%22+OR+%22mysql://%22+%22{T}%22&type=code']
  ],
  infra: [
    [I.search,'Shodan','IoT search engine','https://www.shodan.io/search?query={T}'],
    [I.server,'Censys IPv4','IP data on Censys','https://censys.io/ipv4?q={T}'],
    [I.server,'Censys Domains','Domain search','https://censys.io/domain?q={T}'],
    [I.shield,'Censys Certs','Certificate search','https://censys.io/certificates?q={T}'],
    [I.shield,'CT Logs (crt.sh)','Certificate Transparency','https://crt.sh/?q={T}'],
    [I.globe,'Subdomains','Google subdomain search','https://www.google.com/search?q=site:*.{T}'],
    [I.globe,'Sub-Subdomains','Deep subdomain search','https://www.google.com/search?q=site:*.*.{T}'],
    [I.server,'Reverse IP','All domains on same IP','https://viewdns.info/reverseip/?host={T}&t=1'],
    [I.cloud,'Cloud Storage CSE','AWS, Azure, GCP buckets','https://cse.google.com/cse?cx=002972716746423218710:veac6ui3rio#gsc.tab=0&gsc.q={T}'],
    [I.cloud,'S3 Buckets','Open S3 buckets','https://www.google.com/search?q=site:.s3.amazonaws.com+%22{T}%22'],
    [I.cloud,'DO Spaces','DigitalOcean Spaces','https://www.google.com/search?q=site:digitaloceanspaces.com+%22{T}%22'],
    [I.search,'PublicWWW','Source code search','https://publicwww.com/websites/%22{T}%22/'],
    [I.clock,'Wayback Machine','Archived pages','https://web.archive.org/web/*/{T}/*'],
    [I.shield,'Security Headers','Check headers','https://securityheaders.com/?q={T}&followRedirects=on'],
    [I.search,'ThreatCrowd','Threat intelligence','https://threatcrowd.org/domain.php?domain={T}'],
    [I.search,'PassiveTotal','Passive DNS lookup','https://community.riskiq.com/search/{T}'],
    [I.eye,'DomainEye','Domain investigation','https://domaineye.com/similar/{T}']
  ],
  social: [
    [I.user,'LinkedIn Employees','Employee enumeration','https://www.google.com/search?q=site:linkedin.com+employees+{T}'],
    [I.globe,'Reddit','Discussions about target','https://www.reddit.com/search/?q={T}'],
    [I.eye,'YouTube','Videos about target','https://www.youtube.com/results?search_query={T}'],
    [I.shield,'OpenBugBounty','Public security issues','https://www.openbugbounty.org/search/?search={T}'],
    [I.lock,'Password Leaks','Plaintext passwords','https://www.google.com/search?q=site:throwbin.io+{T}+password'],
    [I.mail,'Email Harvest','Find email addresses','https://www.google.com/search?q=%22@{T}%22+email'],
    [I.user,'Facebook','Facebook pages/profiles','https://www.google.com/search?q=site:facebook.com+%22{T}%22'],
    [I.user,'Twitter/X','Twitter mentions','https://www.google.com/search?q=site:twitter.com+%22{T}%22'],
    [I.user,'Instagram','Instagram profiles','https://www.google.com/search?q=site:instagram.com+%22{T}%22'],
    [I.user,'Pinterest','Pinterest mentions','https://www.google.com/search?q=site:pinterest.com+%22{T}%22'],
    [I.user,'GitHub People','GitHub user search','https://github.com/search?q=%22{T}%22&type=users'],
    [I.mail,'Email on Pastebin','Emails leaked on pastebin','https://www.google.com/search?q=site:pastebin.com+%22@{T}%22'],
    [I.mail,'Email on GitHub','Emails exposed on GitHub','https://github.com/search?q=%22@{T}%22&type=code'],
    [I.lock,'Credential Leaks','username+password leaks','https://www.google.com/search?q=%22{T}%22+%22username%22+%22password%22+site:pastebin.com+|+site:throwbin.io+|+site:justpaste.it'],
    [I.user,'Glassdoor','Company reviews','https://www.google.com/search?q=site:glassdoor.com+%22{T}%22'],
    [I.user,'Crunchbase','Company info','https://www.google.com/search?q=site:crunchbase.com+%22{T}%22'],
    [I.mail,'Email Google Dork','email filetype leak','https://www.google.com/search?q=%22@{T}%22+ext:xls+|+ext:csv+|+ext:txt+|+ext:doc'],
    [I.user,'Telegram Groups','Telegram mentions','https://www.google.com/search?q=site:t.me+%22{T}%22'],
    [I.user,'Discord Servers','Discord mentions','https://www.google.com/search?q=site:discord.gg+OR+site:discord.com+%22{T}%22']
  ],
  osint: [
    // Domain / URL OSINT
    [I.search,'URLScan.io Browse','Open in URLScan','https://urlscan.io/search/#domain:{T}'],
    [I.shield,'VirusTotal','Malware & reputation','https://www.virustotal.com/gui/domain/{T}'],
    [I.globe,'SecurityTrails','DNS & subdomains','https://securitytrails.com/domain/{T}/dns'],
    [I.server,'BuiltWith','Technology profiler','https://builtwith.com/{T}'],
    [I.search,'Wappalyzer','Web tech identifier','https://www.wappalyzer.com/lookup/{T}'],
    [I.globe,'DNSDumpster','DNS recon','https://dnsdumpster.com/'],
    [I.cpu,'Netcraft','Site report','https://sitereport.netcraft.com/?url={T}'],
    [I.globe,'WHOIS Lookup','Domain WHOIS data','https://www.whois.com/whois/{T}'],
    [I.server,'MXToolbox','MX & DNS tools','https://mxtoolbox.com/SuperTool.aspx?action=mx:{T}'],
    [I.shield,'AbuseIPDB','IP abuse reports','https://www.abuseipdb.com/check/{T}'],
    [I.search,'GreyNoise','Internet scanner intel','https://viz.greynoise.io/query?gnql=metadata.rdns:{T}'],
    [I.shield,'AlienVault OTX','Threat intelligence','https://otx.alienvault.com/indicator/domain/{T}'],
    [I.search,'Pulsedive','Threat intel lookup','https://pulsedive.com/indicator/?ioc={T}'],
    [I.server,'BGP.he.net','BGP & ASN info','https://bgp.he.net/dns/{T}'],
    [I.globe,'Subdomain Finder','subfinder online','https://subdomainfinder.c99.nl/scans/{T}'],
    [I.shield,'SSL Labs','SSL/TLS test','https://www.ssllabs.com/ssltest/analyze.html?d={T}'],
    [I.search,'Spyse/Netlas','Attack surface search','https://app.netlas.io/responses/?q=domain:{T}'],
    [I.globe,'Internet Archive','Full archive lookup','https://web.archive.org/web/*/{T}'],
    [I.shield,'Mozilla Observatory','Security best practices','https://observatory.mozilla.org/analyze/{T}'],
    [I.server,'IPinfo.io','IP geolocation & ASN','https://ipinfo.io/{T}'],
    [I.search,'Fofa','Cyberspace search engine','https://en.fofa.info/result?qbase64=' + btoa('domain="{T}"')],
    [I.shield,'Hardenize','Security posture','https://www.hardenize.com/report/{T}'],
    [I.globe,'DNS Checker','Global DNS propagation','https://dnschecker.org/all-dns-records-of-domain.php?query={T}'],

    // Email Reverse Lookup & OSINT
    [I.mail,'Hunter.io','Find company emails','https://hunter.io/search/{T}'],
    [I.mail,'Epieos Email','Email reverse lookup','https://epieos.com/?q=info@{T}'],
    [I.mail,'EmailRep','Email reputation check','https://emailrep.io/query/info@{T}'],
    [I.mail,'Have I Been Pwned','Breach check (HIBP)','https://haveibeenpwned.com/DomainSearch/{T}'],
    [I.mail,'Dehashed','Leaked credentials search','https://www.dehashed.com/search?query={T}'],
    [I.mail,'IntelligenceX','Leak & darknet search','https://intelx.io/?s={T}'],
    [I.mail,'Snov.io','Email finder','https://snov.io/email-finder?domain={T}'],
    [I.mail,'Skymem','Email search engine','https://www.skymem.info/srch?q={T}'],
    [I.mail,'ThatsThem','People & email lookup','https://thatsthem.com/domain/{T}'],
    [I.mail,'Phonebook.cz','Email & domain intel','https://phonebook.cz/search?query={T}&type=email'],
    [I.mail,'Holehe Concept','Email to accounts','https://www.google.com/search?q=%22holehe%22+%22{T}%22+email+osint'],
    [I.mail,'Clearbit','Company email enrichment','https://connect.clearbit.com/v1/people/find?domain={T}'],
    [I.mail,'RocketReach','Find professional emails','https://rocketreach.co/company?keyword={T}'],
    [I.mail,'Voilanorbert','Email verification','https://www.voilanorbert.com/'],
    [I.user,'Namechk','Username availability','https://namechk.com/'],
    [I.user,'WhatsMyName','Username OSINT','https://whatsmyname.app/'],
    [I.search,'Grep.app','Search across git repos','https://grep.app/search?q={T}'],
    [I.search,'SearchCode','Code search engine','https://searchcode.com/?q={T}']
  ]
};

// Render Grids
function renderGrid(id, items, useApiDork) {
  const el = document.getElementById(id);
  if (!el) return;
  const fn = useApiDork ? 'openApiDork' : 'openDork';
  el.innerHTML = items.map(r => 
    `<button class="dork" onclick="${fn}('${r[3]}')">
      <div class="dork-ico">${r[0]}</div>
      <div>
        <div class="dork-name">${r[1]}</div>
        <div class="dork-desc">${r[2]}</div>
      </div>
    </button>`
  ).join('');
}

renderGrid('g-files', D.files);
renderGrid('g-vuln', D.vuln);
renderGrid('g-cms', D.cms);
renderGrid('g-code', D.code);
renderGrid('g-apikeys', D.apikeys, true);
renderGrid('g-ghsecrets', D.ghsecrets, true);
renderGrid('g-infra', D.infra);
renderGrid('g-social', D.social);
renderGrid('g-osint', D.osint);

// API integrations
async function runUrlscan() {
  const domain = document.getElementById('urlscanInput').value.trim();
  if (!domain) return alert('Enter a domain!');
  
  const btn = document.getElementById('urlscanBtn');
  const box = document.getElementById('urlscanResults');
  
  btn.disabled = true;
  btn.textContent = 'Scanning...';
  box.innerHTML = '<div class="loading"><div class="spin"></div>Querying URLScan.io...</div>';
  
  scanCount++;
  document.getElementById('scanCount').textContent = scanCount;

  try {
    const r = await fetch('https://urlscan.io/api/v1/search/?q=domain:' + encodeURIComponent(domain));
    const d = await r.json();
    
    if (!d.results || !d.results.length) {
      box.innerHTML = '<div class="empty">No results found</div>';
      return;
    }
    
    box.innerHTML = `<div style="margin-bottom:8px;font-size:11px;color:#888">Found <strong style="color:#fff">${d.results.length}</strong> results</div>`;
    
    d.results.slice(0, 10).forEach(r => {
      const p = r.page || {}, s = r.stats || {};
      const sc = p.status == 200 ? 's-ok' : p.status == 403 ? 's-warn' : 's-err';
      const c = document.createElement('div');
      c.className = 'res-card';
      c.innerHTML = `
        <div class="res-top">
          <span class="res-domain">${p.domain || r.task?.domain || 'N/A'}</span>
          <span class="res-status ${sc}">${p.status || '?'}</span>
        </div>
        <div class="res-title">${p.title || 'No title'}</div>
        <div class="res-meta">
          <div><div class="m-lbl">IP</div><div class="m-val">${p.ip || 'N/A'}</div></div>
          <div><div class="m-lbl">Server</div><div class="m-val">${p.server || 'N/A'}</div></div>
          <div><div class="m-lbl">ASN</div><div class="m-val">${(p.asnname || 'N/A').substring(0, 25)}</div></div>
          <div><div class="m-lbl">Country</div><div class="m-val">${p.country || 'N/A'}</div></div>
          <div><div class="m-lbl">TLS Issuer</div><div class="m-val">${p.tlsIssuer || 'N/A'}</div></div>
          <div><div class="m-lbl">Requests</div><div class="m-val">${s.requests || 'N/A'}</div></div>
        </div>
        <div class="res-actions">
          <a href="${r.result || '#'}" target="_blank" class="res-btn">${I.ext} Result</a>
          <a href="${p.url || '#'}" target="_blank" class="res-btn">${I.link} URL</a>
          ${r.screenshot ? `<a href="${r.screenshot}" target="_blank" class="res-btn">${I.eye} Screenshot</a>` : ''}
        </div>
        ${r.screenshot ? `<img src="${r.screenshot}" class="res-img" loading="lazy" onerror="this.style.display='none'">` : ''}
      `;
      box.appendChild(c);
    });
  } catch (e) {
    box.innerHTML = `<div class="empty" style="color:#f87171">Error: ${e.message}</div>`;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Scan';
  }
}

async function runLeakcheck() {
  const email = document.getElementById('leakcheckInput').value.trim();
  if (!email) return alert('Enter an email!');

  const btn = document.getElementById('leakcheckBtn');
  const box = document.getElementById('leakcheckResults');
  
  btn.disabled = true;
  btn.textContent = 'Checking...';
  box.innerHTML = '<div class="loading"><div class="spin"></div>Checking LeakCheck API...</div>';
  
  scanCount++;
  document.getElementById('scanCount').textContent = scanCount;

  try {
    const r = await fetch('https://leakcheck.io/api/public?check=' + encodeURIComponent(email));
    const d = await r.json();

    if (!d.success || d.found === 0) {
      box.innerHTML = `
        <div class="leak-box">
          <div class="res-top">
            <span class="res-domain" style="color:var(--green)">No breaches found</span>
            <span class="leak-count" style="color:var(--green)">0</span>
          </div>
          <div class="res-title">${email} was not found in known data breaches</div>
        </div>`;
      return;
    }

    let h = `
      <div class="leak-box">
        <div class="res-top">
          <span class="res-domain" style="color:var(--red)">Breach(es) Found!</span>
          <span class="leak-count" style="color:var(--red)">${d.found}</span>
        </div>
        <div class="res-title">Exposed fields: ${(d.fields || []).join(', ') || 'N/A'}</div>
    `;

    if (d.sources && d.sources.length) {
      h += '<div style="margin-top:10px">';
      d.sources.forEach(s => {
        h += `
          <div class="leak-src">
            <span style="color:var(--red)">•</span>
            <span class="leak-src-name">${s.name || 'Unknown'}</span>
            <span class="leak-src-date">${s.date || 'N/A'}</span>
          </div>`;
      });
      h += '</div>';
    }
    
    h += '</div>';
    box.innerHTML = h;
  } catch (e) {
    box.innerHTML = `<div class="empty" style="color:#f87171">Error: ${e.message}<br><small style="color:var(--text-muted);margin-top:4px;display:block">The LeakCheck API may have rate limits.</small></div>`;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Check';
  }
}

// Key bindings
document.getElementById('targetDomain').addEventListener('keydown', e => { if (e.key === 'Enter') setTarget(); });
document.getElementById('urlscanInput').addEventListener('keydown', e => { if (e.key === 'Enter') runUrlscan(); });
document.getElementById('leakcheckInput').addEventListener('keydown', e => { if (e.key === 'Enter') runLeakcheck(); });
document.getElementById('holeheInput').addEventListener('keydown', e => { if (e.key === 'Enter') runHolehe(); });

// MD5 for Gravatar (minimal implementation)
function md5(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d)return(x^2147483648^F^H);if(I|d){if(x&1073741824)return(x^3221225472^F^H);else return(x^1073741824^F^H)}else return(x^F^H)}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var J=6,I=10,H=15,F=21;s=function(x){x=x.replace(/\r\n/g,"\n");var d="";for(var k=0;k<x.length;k++){var F=x.charCodeAt(k);if(F<128){d+=String.fromCharCode(F)}else if((F>127)&&(F<2048)){d+=String.fromCharCode((F>>6)|192);d+=String.fromCharCode((F&63)|128)}else{d+=String.fromCharCode((F>>12)|224);d+=String.fromCharCode(((F>>6)&63)|128);d+=String.fromCharCode((F&63)|128)}}return d};s=s(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],J,4096336452);V=t(V,Y,X,W,C[P+7],I,1126891415);W=t(W,V,Y,X,C[P+14],H,2878612391);X=t(X,W,V,Y,C[P+5],F,4237533241);Y=t(Y,X,W,V,C[P+12],J,1700485571);V=t(V,Y,X,W,C[P+3],I,2399980690);W=t(W,V,Y,X,C[P+10],H,4293915773);X=t(X,W,V,Y,C[P+1],F,2240044497);Y=t(Y,X,W,V,C[P+8],J,1873313359);V=t(V,Y,X,W,C[P+15],I,4264355552);W=t(W,V,Y,X,C[P+6],H,2734768916);X=t(X,W,V,Y,C[P+13],F,1309151649);Y=t(Y,X,W,V,C[P+4],J,4149444226);V=t(V,Y,X,W,C[P+11],I,3174756917);W=t(W,V,Y,X,C[P+2],H,718787259);X=t(X,W,V,Y,C[P+9],F,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}return(B(Y)+B(X)+B(W)+B(V)).toLowerCase()}

// Holehe-style Email Account Checker
const HOLEHE_SERVICES = [
  { name: 'Gravatar', type: 'auto', check: 'gravatar' },
  { name: 'GitHub', recovery: 'https://github.com/password_reset', signup: 'https://github.com/signup' },
  { name: 'Instagram', recovery: 'https://www.instagram.com/accounts/password/reset/' },
  { name: 'Twitter / X', recovery: 'https://twitter.com/i/flow/password_reset' },
  { name: 'Facebook', recovery: 'https://www.facebook.com/login/identify/' },
  { name: 'Spotify', recovery: 'https://accounts.spotify.com/en/password-reset' },
  { name: 'LinkedIn', recovery: 'https://www.linkedin.com/checkpoint/rp/request-password-reset' },
  { name: 'Microsoft', recovery: 'https://account.live.com/ResetPassword.aspx' },
  { name: 'Google', recovery: 'https://accounts.google.com/signin/recovery' },
  { name: 'Apple', recovery: 'https://iforgot.apple.com/' },
  { name: 'Discord', recovery: 'https://discord.com/reset' },
  { name: 'Slack', recovery: 'https://slack.com/forgot-password' },
  { name: 'Netflix', recovery: 'https://www.netflix.com/LoginHelp' },
  { name: 'Amazon', recovery: 'https://www.amazon.com/ap/forgotpassword' },
  { name: 'Pinterest', recovery: 'https://www.pinterest.com/password/reset/' },
  { name: 'Reddit', recovery: 'https://www.reddit.com/password' },
  { name: 'Dropbox', recovery: 'https://www.dropbox.com/forgot' },
  { name: 'WordPress', recovery: 'https://wordpress.com/wp-login.php?action=lostpassword' },
  { name: 'Tumblr', recovery: 'https://www.tumblr.com/forgot_password' },
  { name: 'Adobe', recovery: 'https://account.adobe.com/reset-password' },
  { name: 'Twitch', recovery: 'https://passport.twitch.tv/password_resets/new' },
  { name: 'Snapchat', recovery: 'https://accounts.snapchat.com/accounts/password_reset_request' },
  { name: 'TikTok', recovery: 'https://www.tiktok.com/login/phone-or-email/reset-password' },
  { name: 'PayPal', recovery: 'https://www.paypal.com/authflow/password-recovery/' },
  { name: 'eBay', recovery: 'https://signin.ebay.com/ws/eBayISAPI.dll?ForgotPassword' },
  { name: 'Zoom', recovery: 'https://zoom.us/forgot_password' },
  { name: 'GitLab', recovery: 'https://gitlab.com/users/password/new' },
  { name: 'Bitbucket', recovery: 'https://bitbucket.org/account/password/reset/' },
  { name: 'npm', recovery: 'https://www.npmjs.com/forgot' },
  { name: 'PyPI', recovery: 'https://pypi.org/account/request-password-reset/' },
  { name: 'Steam', recovery: 'https://help.steampowered.com/wizard/HelpWithLoginInfo?issueid=406' },
  { name: 'Epic Games', recovery: 'https://www.epicgames.com/id/forgot-password' },
  { name: 'Figma', recovery: 'https://www.figma.com/forgot_password/' },
  { name: 'Notion', recovery: 'https://www.notion.so/login' },
  { name: 'Trello', recovery: 'https://trello.com/forgot' },
];

async function runHolehe() {
  const email = document.getElementById('holeheInput').value.trim();
  if (!email || !email.includes('@')) return alert('Enter a valid email!');

  const btn = document.getElementById('holeheBtn');
  const box = document.getElementById('holeheResults');
  btn.disabled = true;
  btn.textContent = 'Checking...';
  scanCount++;
  document.getElementById('scanCount').textContent = scanCount;

  // Build the results grid
  let html = `<div class="holehe-summary"><span>Email: <strong>${email}</strong></span><span>Services: <strong>${HOLEHE_SERVICES.length}</strong></span><span>Status: <strong id="holehe-status">Checking...</strong></span></div>`;
  html += '<div class="holehe-grid">';

  HOLEHE_SERVICES.forEach((svc, i) => {
    const url = svc.recovery || svc.signup || '#';
    html += `<a href="${url}" target="_blank" class="holehe-item" id="hsvc-${i}" title="Open ${svc.name} recovery page">
      <div class="holehe-dot checking" id="hdot-${i}"></div>
      <span class="holehe-name">${svc.name}</span>
      <span class="holehe-status" id="hstat-${i}">checking</span>
    </a>`;
  });

  html += '</div>';
  box.innerHTML = html;

  // Check Gravatar (the only one we can auto-check from browser)
  const hash = md5(email.toLowerCase().trim());
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?d=404&s=1`;

  try {
    const img = new Image();
    img.onload = () => {
      document.getElementById('hdot-0').className = 'holehe-dot found';
      document.getElementById('hstat-0').textContent = 'FOUND';
      document.getElementById('hstat-0').style.color = '#4ade80';
    };
    img.onerror = () => {
      document.getElementById('hdot-0').className = 'holehe-dot not-found';
      document.getElementById('hstat-0').textContent = 'not found';
    };
    img.src = gravatarUrl;
  } catch (e) {
    document.getElementById('hdot-0').className = 'holehe-dot error';
    document.getElementById('hstat-0').textContent = 'error';
  }

  // For other services, mark as "click to check" (browser CORS prevents auto-check)
  for (let i = 1; i < HOLEHE_SERVICES.length; i++) {
    setTimeout(() => {
      const dot = document.getElementById('hdot-' + i);
      const stat = document.getElementById('hstat-' + i);
      if (dot) {
        dot.className = 'holehe-dot';
        dot.style.background = '#ffffff';
      }
      if (stat) stat.textContent = 'click to check';
    }, 100 + (i * 50));
  }

  setTimeout(() => {
    const st = document.getElementById('holehe-status');
    if (st) st.textContent = 'Done — click services to check';
    btn.disabled = false;
    btn.textContent = 'Check';
  }, 100 + (HOLEHE_SERVICES.length * 50));
}
