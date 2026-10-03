const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8', '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.webp': 'image/webp', '.txt': 'text/plain; charset=UTF-8', '.xml': 'application/xml'
};
const publicFiles = new Set(['/index.html', '/robots.txt', '/sitemap.xml', '/404.html']);
const publicAsset = /^\/(?:css|js|images)\/[a-zA-Z0-9_-]+\.(?:css|js|png|jpe?g|gif|svg|ico|webp)$/;
const root = fs.realpathSync(__dirname);
const securityHeaders = require('./vercel.json').headers[0].headers;

const server = http.createServer((req, res) => {
  for (const { key, value } of securityHeaders) res.setHeader(key, value);
  const fail = (status, message) => {
    res.writeHead(status, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end(message);
  };
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.setHeader('Allow', 'GET, HEAD');
    return fail(405, 'Method Not Allowed');
  }
  let reqPath;
  try { reqPath = decodeURIComponent(req.url.split('?')[0]); }
  catch { return fail(400, 'Bad Request'); }
  if (reqPath === '/') reqPath = '/index.html';
  if (!publicFiles.has(reqPath) && !publicAsset.test(reqPath)) return fail(404, 'Not Found');
  const filePath = path.resolve(root, '.' + reqPath);
  fs.realpath(filePath, (err, realPath) => {
    if (err) return fail(404, 'Not Found');
    if (!realPath.startsWith(root + path.sep)) return fail(403, 'Forbidden');
    fs.stat(realPath, (err, stats) => {
      if (err || !stats.isFile()) return fail(404, 'Not Found');
      const stream = fs.createReadStream(realPath);
      stream.on('error', () => {
        if (!res.headersSent) fail(500, 'Internal Server Error');
        else res.destroy();
      });
      stream.on('open', () => {
        res.writeHead(200, {
          'Content-Type': MIME_TYPES[path.extname(realPath).toLowerCase()] || 'application/octet-stream',
          'Content-Length': stats.size, 'Cache-Control': 'no-cache'
        });
        if (req.method === 'HEAD') { stream.destroy(); res.end(); }
        else stream.pipe(res);
      });
      res.on('close', () => stream.destroy());
    });
  });
});
if (require.main === module) {
  server.listen(PORT, '127.0.0.1', () => console.log(`Server đang chạy tại http://localhost:${PORT}`));
}
module.exports = server;
