window.onload = function() {
 
    var messages = [];
    var socket = io.connect(window.location.hostname);
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("name");
 
    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });
 
    sendButton.onclick = function() {
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = field.value;
            socket.emit('send', { message: text, username: name.value });
			field.value = "";
        }
    };
 
	
	

}
// Sends the updated element's ID and new value to the server
// 	Eventually we need to send the attribute name (humidity, temperature, etc)
// 	 instead of the element ID
function sendUICommand( elementID, newValue ) {
	console.log("UI Update");
	socket.emit('send', { message: newValue, username: elementID });
}