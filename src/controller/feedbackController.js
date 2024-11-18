const FeedbackDAO = require('../dao/feedbackDAO');
const Feedback = require('../model/feedback');

const feedbackDAO = new FeedbackDAO();

exports.handleRequest = (req, res) => {
   if (req.method === 'GET') {
       feedbackDAO.findAll((err, rows) => {
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
           const { usuarioId, titulo, descricao, tipo, status } = JSON.parse(body);
           const feedback = new Feedback(usuarioId, titulo, descricao, tipo, status);
           feedbackDAO.create(feedback, (err) => {
               if (err) {
                   res.writeHead(500, { 'Content-Type': 'text/plain' });
                   res.end('Erro no servidor');
               } else {
                   res.writeHead(201, { 'Content-Type': 'text/plain' });
                   res.end('Feedback criado');
               }
           });
       });
   }
};
