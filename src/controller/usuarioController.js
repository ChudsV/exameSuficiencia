const UsuarioDAO = require('../dao/usuarioDAO');
const usuarioDAO = new UsuarioDAO();

class UsuarioController {
   register(req, res) {
       let body = '';
       req.on('data', chunk => {
           body += chunk.toString();
       });
       req.on('end', () => {
           const user = JSON.parse(body);
           usuarioDAO.create(user, (err, result) => {
               if (err) {
                   res.writeHead(500, { 'Content-Type': 'application/json' });
                   return res.end(JSON.stringify({ error: 'Erro ao cadastrar usuário' }));
               }
               res.writeHead(201, { 'Content-Type': 'application/json' });
               res.end(JSON.stringify({ message: 'Usuário cadastrado com sucesso' }));
           });
       });
   }

   getAll(req, res) {
       usuarioDAO.findAll((err, rows) => {
           if (err) {
               res.writeHead(500, { 'Content-Type': 'text/plain' });
               res.end('Erro no servidor');
           } else {
               res.writeHead(200, { 'Content-Type': 'application/json' });
               res.end(JSON.stringify(rows));
           }
       });
   }
}

module.exports = new UsuarioController();
