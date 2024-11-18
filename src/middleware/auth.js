const UsuarioDAO = require('../dao/usuarioDAO');
const usuarioDAO = new UsuarioDAO();

function authMiddleware(req, res, next) {
   if (req.url === '/') {
       return next();
   }

   const authHeader = req.headers['authorization'];

   if (!authHeader || !authHeader.startsWith('Basic ')) {
       res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Restricted Area"', 'Content-Type': 'text/plain' });
       return res.end('Autenticação requerida.');
   }

   const base64Credentials = authHeader.split(' ')[1];
   const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
   const [login, senha] = credentials.split(':');

   usuarioDAO.findByCredentials(login, senha, (err, user) => {
       if (err) {
           res.writeHead(500, { 'Content-Type': 'text/plain' });
           return res.end('Erro no servidor');
       }

       if (user) {
           return next();
       } else {
           res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Restricted Area"', 'Content-Type': 'text/plain' });
           return res.end('Credenciais inválidas.');
       }
   });
}

module.exports = authMiddleware;
