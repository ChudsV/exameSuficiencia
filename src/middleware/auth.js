const UsuarioDAO = require('../dao/usuarioDAO');
const usuarioDAO = new UsuarioDAO();

function authMiddleware(req, res, next) {
   if (req.url === '/') {
       return next();
   }
   if (req.url === '/usuarios/cadastrar') {
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

   if(login === 'admin' && senha === '123456'){
    req.userId = 0;
    return next();
   }

   usuarioDAO.findByCredentials(login, senha, (err, user) => {
       if (err) {
           res.writeHead(500, { 'Content-Type': 'text/plain' });
           return res.end('Erro no servidor');
       }

       if (user) {
           req.userId = user.id;
           return next();
       } else {
           res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Restricted Area"', 'Content-Type': 'text/plain' });
           return res.end('Credenciais inválidas.');
       }
   });
}

module.exports = authMiddleware;
