var http = require('http');

var PORT = 80, HOST = '0.0.0.0';

var server = http.createServer(function (req, res, next) {
    res.end('<script>alert("I am from JS");</script>');
}).listen(PORT, HOST, function () {
    console.log('Server Listening on port : ' + PORT);
});