
![computer app](https://github.com/prosanjeev/Computer-Institute-App/assets/154009697/7180406f-a4ed-4eb5-b164-d026736710b0)



cPanel ---
.htaccess
---code---
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
