const http = require('http');
const app = require('./backend/app');

const port = 3000;

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})