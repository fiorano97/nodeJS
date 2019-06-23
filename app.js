const http = require('http');
const hostname = '0.0.0.0';

const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
    
    var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log('Request IP => %s', ip);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://%s:%s', hostname, port);
});

process.on('SIGHT', function() {
    console.log('Caught inerrupt signal and will exit');
    process.exit();
});

