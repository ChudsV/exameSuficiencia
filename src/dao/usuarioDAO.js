const Conexao = require('../database/conexao');

class UsuarioDAO extends Conexao {
   create(usuario, callback) {
       const sql = `INSERT INTO Usuario (nome, email, login, senha) VALUES (?, ?, ?, ?)`;
       this.db.run(sql, [usuario.nome, usuario.email, usuario.login, usuario.senha], callback);
   }

   findAll(callback) {
       const sql = `SELECT * FROM Usuario`;
       this.db.all(sql, [], callback);
   }

   findByCredentials(login, senha, callback) {
       const sql = `SELECT * FROM Usuario WHERE login = ? AND senha = ?`;
       this.db.get(sql, [login, senha], callback);
   }
}

module.exports = UsuarioDAO;
