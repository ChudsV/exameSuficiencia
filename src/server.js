const http = require('http');
const fs = require('fs');
const path = require('path');
const handleRoute = require('./rotas');
const authMiddleware = require('./middleware/auth');

require('./database/database');

const server = http.createServer((req, res) => {
   const next = () => handleRoute(req, res);

   if (req.url === '/' && req.method === 'GET') {
       fs.readFile(path.join(__dirname, 'view', 'formulario_view.html'), (err, content) => {
           if (err) {
               res.writeHead(500);
               res.end('Erro ao carregar a página.');
           } else {
               res.writeHead(200, { 'Content-Type': 'text/html' });
               res.end(content);
           }
       });
   } else if (req.url === '/feedbacks' && req.method === 'GET') {
       fs.readFile(path.join(__dirname, 'view', 'feedbacks_view.html'), (err, content) => {
           if (err) {
               res.writeHead(500);
               res.end('Erro ao carregar a página.');
           } else {
               res.writeHead(200, { 'Content-Type': 'text/html' });
               res.end(content);
           }
       });
   } else if (req.url.startsWith('/feedbacks/') && req.method === 'GET') {
       fs.readFile(path.join(__dirname, 'view', 'feedbacks_show_view.html'), (err, content) => {
           if (err) {
               res.writeHead(500);
               res.end('Erro ao carregar a página.');
           } else {
               res.writeHead(200, { 'Content-Type': 'text/html' });
               res.end(content);
           }
       });
   } else {
       authMiddleware(req, res, next);
   }
});

server.listen(3000, () => {
   console.log('Server listening on port 3000');
});
