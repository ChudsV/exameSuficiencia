const feedbackController = require('./controller/feedbackController');
const usuarioController = require('./controller/usuarioController');

const handleRoute = (req, res) => {
   const [_, route, id] = req.url.split('/');

   if (req.url === '/' && req.method === 'GET') {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('Bem-vindo à API!');
   } 
   if (route === 'usuarios') {
        if (req.method === 'POST' && req.url.includes('/cadastrar')) {
            usuarioController.register(req, res);
        }
        if(req.method === 'GET' && req.url.includes('/listarusuarios')){
            usuarioController.getAll(req, res);
        }
   } else if (route === 'feedbacks' || route === 'feedbacksview' || route === 'feedbacksunique') {
       if (req.method === 'GET' && req.url.includes("/feedbacksview")) {
           feedbackController.index(req, res);
       } else if (req.method === 'GET' && id && req.url.includes("/feedbacksunique")) {
           feedbackController.show(req, res, id);
       } else if (req.method === 'POST' && req.url.includes("/cadastrar")) {
           feedbackController.store(req, res);
       } else if (req.method === 'PUT' && req.url.includes("/atualizar")) {
           feedbackController.update(req, res);
       } else {
           res.writeHead(404, { 'Content-Type': 'text/plain' });
           res.end('Rota não encontrada');
       }
   } else {
       res.writeHead(404, { 'Content-Type': 'text/plain' });
       res.end('Rota não encontrada');
   }
};

module.exports = handleRoute;
