
var http = require('http');

http.createServer(function (req, res) {

    if(req.method == 'POST') {
        console.log('Got request ' + req.method + ' on ' + req.uri);
        req.on('data', function(chunk) {
            console.log('Data');
            console.log(chunk.toString());
        });

        req.on('end', function() {
            res.writeHead(200, "OK", {'Content-Type': 'text/html'});
            res.end();
        });
    } else {
        console.log('Wrong Method');
        res.writeHead(405, 'Method not allowed');
        res.end();
    }

}).listen(3000);
