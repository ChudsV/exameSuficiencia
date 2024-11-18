const Conexao = require('../database/conexao');

class FeedbackDAO extends Conexao {
   create(feedback, callback) {
       const sql = `INSERT INTO Feedback (usuarioId, titulo, descricao, tipo, status) VALUES (?, ?, ?, ?, ?)`;
       this.db.run(sql, [feedback.usuarioId, feedback.titulo, feedback.descricao, feedback.tipo, feedback.status], callback);
   }

   findAll(callback) {
       const sql = `SELECT * FROM Feedback`;
       this.db.all(sql, [], callback);
   }
}

module.exports = FeedbackDAO;
