const url = require('url');
const usuarioController = require('./controller/usuarioController');
const feedbackController = require('./controller/feedbackController');

const rotas = {
   '/usuarios': usuarioController.handleRequest,
   '/feedbacks': feedbackController.handleRequest,
};

function handleRoute(req, res) {
   const parsedUrl = url.parse(req.url, true);
   const pathname = parsedUrl.pathname;

   for (const route in rotas) {
       if (pathname.startsWith(route)) {
           return rotas[route](req, res);
       }
   }

   res.writeHead(404, { 'Content-Type': 'text/plain' });
   res.end('Not Found');
}

module.exports = handleRoute;
