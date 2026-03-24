import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  
  if (req.method === 'POST' && req.url === '/save-html') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      fs.writeFileSync('website_completo_raw.html', body);
      res.end('saved');
      console.log('HTML saved.');
      process.exit(0);
    });
  }
});
server.listen(8081, () => console.log('Listening 8081 for DOM'));
