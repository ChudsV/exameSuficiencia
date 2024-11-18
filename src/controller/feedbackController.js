const FeedbackDAO = require('../dao/feedbackDAO');
const feedbackDAO = new FeedbackDAO();

class FeedbackController {
   index(req, res) {
       feedbackDAO.findAll((err, feedbacks) => {
           if (err) {
               res.writeHead(500, { 'Content-Type': 'application/json' });
               return res.end(JSON.stringify({ error: 'Erro ao buscar feedbacks' }));
           }
           res.writeHead(200, { 'Content-Type': 'application/json' });
           res.end(JSON.stringify(feedbacks));
       });
   }

   show(req, res, id) {
       feedbackDAO.findById(id, (err, feedback) => {
           if (err) {
               res.writeHead(500, { 'Content-Type': 'application/json' });
               return res.end(JSON.stringify({ error: 'Erro ao buscar feedback' }));
           }
           if (feedback) {
               res.writeHead(200, { 'Content-Type': 'application/json' });
               res.end(JSON.stringify(feedback));
           } else {
               res.writeHead(404, { 'Content-Type': 'application/json' });
               res.end(JSON.stringify({ error: 'Feedback não encontrado' }));
           }
       });
   }

   store(req, res) {
       let body = '';
       req.on('data', chunk => {
           body += chunk.toString();
       });
       req.on('end', () => {
           const feedback = JSON.parse(body);
           feedbackDAO.create(feedback, (err) => {
               if (err) {
                   res.writeHead(500, { 'Content-Type': 'application/json' });
                   return res.end(JSON.stringify({ error: 'Erro ao cadastrar feedback' }));
               }
               res.writeHead(201, { 'Content-Type': 'application/json' });
               res.end(JSON.stringify({ message: 'Feedback cadastrado com sucesso' }));
           });
       });
   }

   update(req, res) {
       let body = '';
       req.on('data', chunk => {
           body += chunk.toString();
       });
       req.on('end', () => {
           const { id, status } = JSON.parse(body);
           feedbackDAO.updateStatus(id, status, (err) => {
               if (err) {
                   res.writeHead(500, { 'Content-Type': 'application/json' });
                   return res.end(JSON.stringify({ error: 'Erro ao atualizar status do feedback' }));
               }
               res.writeHead(200, { 'Content-Type': 'application/json' });
               res.end(JSON.stringify({ message: 'Status do feedback atualizado com sucesso' }));
           });
       });
   }
}

module.exports = new FeedbackController();
