const Conexao = require('../database/conexao');

class Feedback extends Conexao {
    constructor(usuarioId, titulo, descricao, tipo, status) {
        super();
        this.usuarioId = usuarioId;
        this.titulo = titulo;
        this.descricao = descricao;
        this.tipo = tipo;
        this.status = status;
    }
}

module.exports = Feedback;
