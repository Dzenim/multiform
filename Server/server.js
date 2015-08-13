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

            req.on('error', function(err) {
                console.error('Error with the request:', err.message);
            });

            req.on('end', function() {
                res.writeHead(200, "OK", {'Content-Type': 'text/html'});

                var postData = qs.parse(body);
                console.log('Data: ');
                for(var prop in postData) {
                    console.log(prop + ': ' + postData[prop]);
                }
                console.log(JSON.stringify(postData));
                res.write(JSON.stringify(postData));
                res.end();
            });
        } else {
            res.writeHead(405, 'Method not allowed');
            res.write('Method not allowed');
            res.end();
        }

    }).listen(3000);
}

if(module.parent) {
	exports.run = startServer;
    console.log('This module is required');
} else {
	startServer();
}
