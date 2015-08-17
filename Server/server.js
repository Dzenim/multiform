var http = require('http');
var  requestHandler = require('./requestHandler');

var server = http.createServer(function (req, res) {
         requestHandler(req,res);
    });

if(module.parent) {
    module.exports = server;
    console.log('This module is required');
} else {
	server.listen(3000);
}
