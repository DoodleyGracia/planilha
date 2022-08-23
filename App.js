const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Seja bem vindo ao meu mundo!!!');
});

server.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});