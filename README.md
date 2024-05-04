
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



------------------------------------

...
...
"scripts": {
    "start": "react-scripts --max_old_space_size=4096 start",
    "build": "react-scripts --max_old_space_size=4096 build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
...
