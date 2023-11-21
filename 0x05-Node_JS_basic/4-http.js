const http = require('http')
const hostname = '127.0.0.1';
const port = 1245;

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type':'text/plain'});

    response.end('Hello Holberton School!');
});

server.listen(port, hostname, () => {
    console.log(`The server ${hostname} is now listening on port ${port}`);
})