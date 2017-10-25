var WebSocketServer = require('ws').Server;
var http = require('http');
var port = process.env.PORT || 80;

var server = http.createServer();
server.listen(port);

console.log(port);
var wss = new WebSocketServer({
    server: server
});

console.log('websocket server created');

wss.on('connection', function (ws) {
    console.log('websocket connection open');

    var id = setInterval(function () {
        var message = 'Ping from server: ' + new Date();
        ws.send(message, function () {
            console.log('Message sent: ' + message);
        });
    }, 2000);

    ws.on('message', function (message) {
        console.log(message);
    });

    ws.on('close', function () {
        console.log('websocket connection closed');
        clearInterval(id);
    });

});


























