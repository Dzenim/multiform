
var http = require('http');
var qs = require('querystring');

function startServer () {
    http.createServer(function (req, res) {

        if(req.method == 'POST') {
            console.log('Got ' + req.method + ' request');
            var body = '';
            req.on('data', function(chunk) {
                body += chunk;
            });

            req.on('end', function() {
                res.writeHead(200, "OK", {'Content-Type': 'text/html'});
                res.write('Ok');
                res.end();

                var postData = qs.parse(body);
                console.log('Data: ');
                console.log(postData);

            });
        } else {
            res.writeHead(405, 'Method not allowed');
            res.write('Method not allowed');
            res.end();
        }

    }).listen(3000);
}

startServer();
