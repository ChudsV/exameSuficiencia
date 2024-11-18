const Conexao = require('../database/conexao');

class FeedbackDAO extends Conexao {
   findAll(callback) {
       const sql = `SELECT * FROM Feedback`;
       this.db.all(sql, [], callback);
   }

   findById(id, callback) {
       const sql = `SELECT * FROM Feedback WHERE id = ?`;
       this.db.get(sql, [id], callback);
   }

   create(feedback, callback) {
       const sql = `INSERT INTO Feedback (usuarioId, titulo, descricao, tipo, status) VALUES (?, ?, ?, ?, ?)`;
       this.db.run(sql, [feedback.usuarioId, feedback.titulo, feedback.descricao, feedback.tipo, 'recebido'], callback);
   }

   updateStatus(id, status, callback) {
       const sql = `UPDATE Feedback SET status = ? WHERE id = ?`;
       this.db.run(sql, [status, id], callback);
   }
}

module.exports = FeedbackDAO;
