const http = require('http');
const handleRoute = require('./rotas');

require('./database/database');

const server = http.createServer((req, res) => {
   handleRoute(req, res);
});

server.listen(3000, () => {
   console.log('Server listening on port 3000');
});
