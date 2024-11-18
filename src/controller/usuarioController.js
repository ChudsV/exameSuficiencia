const UsuarioDAO = require('../dao/usuarioDAO');
const Usuario = require('../model/usuario');

const usuarioDAO = new UsuarioDAO();

exports.handleRequest = (req, res) => {
   if (req.method === 'GET') {
       usuarioDAO.findAll((err, rows) => {
           if (err) {
               res.writeHead(500, { 'Content-Type': 'text/plain' });
               res.end('Erro no servidor');
           } else {
               res.writeHead(200, { 'Content-Type': 'application/json' });
               res.end(JSON.stringify(rows));
           }
       });
   } else if (req.method === 'POST') {
       let body = '';
       req.on('data', chunk => {
           body += chunk.toString();
       });
       req.on('end', () => {
           const { nome, email, login, senha } = JSON.parse(body);
           const usuario = new Usuario(nome, email, login, senha);
           usuarioDAO.create(usuario, (err) => {
               if (err) {
                   res.writeHead(500, { 'Content-Type': 'text/plain' });
                   res.end('Erro no servidor');
               } else {
                   res.writeHead(201, { 'Content-Type': 'text/plain' });
                   res.end('Usuário criado');
               }
           });
       });
   }
};
