var http = require('http');

var PORT = 80, HOST = '0.0.0.0';


var server = http.createServer(function (req, res, next) {
    res.end('<iframe width="420" height="345" src="https://www.youtube.com/embed/CEr8s1ljpYY">\n' +
        '</iframe>');

    var httptwo = require('./httptwo')();

}).listen(PORT, HOST, function () {
    console.log('Server Listening on port : ' + PORT);
});