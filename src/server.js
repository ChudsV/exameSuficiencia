const http = require('http');
const handleRoute = require('./rotas');
const authMiddleware = require('./middleware/auth');

require('./database/database');

const server = http.createServer((req, res) => {
   const next = () => handleRoute(req, res);
   authMiddleware(req, res, next);
});

server.listen(3000, () => {
   console.log('Server listening on port 3000');
});
