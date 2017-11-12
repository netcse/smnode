var http = require('http');

var PORT = 80, HOST = '0.0.0.0';

var server = http.createServer(function (req, res, next) {
    var httptwo = require('./httptwo')();

}).listen(PORT, HOST, function () {
    console.log('Server Listening on : http://' + HOST + ':' + PORT);
});