const sqlite3 = require('sqlite3').verbose();
const path = require('path');

class Conexao {
   constructor() {
       const dbPath = path.resolve(__dirname, 'database.db');
       this.db = new sqlite3.Database(dbPath, (err) => {
           if (err) {
               console.error('Could not connect to database', err);
           } else {
               console.log('Connected to database');
           }
        });
   }
}

module.exports = Conexao;
