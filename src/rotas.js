const usuarioController = require('./controller/usuarioController');
const feedbackController = require('./controller/feedbackController');

const handleRoute = (req, res) => {
   if (req.url === '/' && req.method === 'GET') {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('Bem-vindo à API!');
   } else if (req.url.startsWith('/usuarios')) {
       usuarioController.handleRequest(req, res);
   } else if (req.url.startsWith('/feedbacks')) {
       feedbackController.handleRequest(req, res);
   } else {
       res.writeHead(404, { 'Content-Type': 'text/plain' });
       res.end('Rota não encontrada');
   }
};

module.exports = handleRoute;
