var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(process.env.PORT || 3000);

app.use(express.static('public'));

var io = socket(server);
io.on('connection', (socket) => {
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});
