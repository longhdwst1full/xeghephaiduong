const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const name of ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'css', 'js', 'images']) {
  fs.cpSync(path.join(__dirname, name), path.join(output, name), { recursive: true });
}
console.log('Static site built in dist/');
