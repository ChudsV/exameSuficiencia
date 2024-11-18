const Conexao = require('./conexao');

class Database extends Conexao {
    constructor() {
        super();
        this.createTables();
    }

    createTables() {
        const sqlUsuario = `
           CREATE TABLE IF NOT EXISTS Usuario (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               nome TEXT,
               email TEXT,
               login TEXT,
               senha TEXT
           )`;

        const sqlFeedback = `
           CREATE TABLE IF NOT EXISTS Feedback (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               usuarioId INTEGER,
               titulo TEXT,
               descricao TEXT,
               tipo TEXT,
               status TEXT,
               FOREIGN KEY(usuarioId) REFERENCES Usuario(id)
           )`;

        this.db.run(sqlUsuario, (err) => {
            if (err) {
                console.error('Erro ao criar tabela Usuario:', err.message);
            } else {
                console.log('Tabela Usuario criada ou já existe.');
            }
        });

        this.db.run(sqlFeedback, (err) => {
            if (err) {
                console.error('Erro ao criar tabela Feedback:', err.message);
            } else {
                console.log('Tabela Feedback criada ou já existe.');
            }
        });
    }
}

new Database();
