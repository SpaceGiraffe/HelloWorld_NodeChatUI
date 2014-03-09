// Sets up an Express server
var express = require("express");
var app = express();
// Defines a port for connections to clients
var port = process.env.PORT || 5000;
 
// Defines where the template files are
app.set('views', __dirname + '/tpl');
// Sets Jade as the View engine for Express
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
// Sends the Jade view to the user
app.get("/", function(req, res){
    res.render("page");
});

// Tells Express where to look for client-side resources
app.use(express.static(__dirname + '/public'));
 
 // Passes the Express server to socket.io and listens to the defined port
var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port " + port);

// Passes the client's socket to the handler
io.sockets.on('connection', function (socket) {
	// Emits a welcome message when a client connects
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});
