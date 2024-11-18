const Conexao = require('../database/conexao');

class Usuario extends Conexao {
   constructor(nome, email, login, senha) {
       super();
       this.nome = nome;
       this.email = email;
       this.login = login;
       this.senha = senha;
   }
}

module.exports = Usuario;
