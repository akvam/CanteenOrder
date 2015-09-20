var http = require('http');
var port = process.env.PORT || 13337;

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World here is today´s menu\n');
}).listen(port);
