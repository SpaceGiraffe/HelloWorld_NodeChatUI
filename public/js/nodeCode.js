var socket;
window.onload = function() {
	socketInit();
}

// Initializes a socket connection with the Node server
function socketInit() {
    var messages = [];
    socket = io.connect(window.location.hostname);
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
	
	setUIEventHandlers();
}

// Sends the updated element's ID and new value to the server
// 	Eventually we need to send the attribute name (humidity, temperature, etc)
// 	 instead of the element ID
function sendUICommand( elementID, newValue ) {
	console.log("UI Update");
	socket.emit('send', { message: newValue, username: elementID });
}

// Attaches event handlers to UI components that will send UI 
//	commands to the server
function setUIEventHandlers() {
	console.log("Setting UI event listeners...");
	
	$('.incrementBtn').on('click', function(){
		var uiElementID = "text1";
		console.log(uiElementID);
		var uiElementVal = $("#" + uiElementID).val();
		console.log("Element ID: " + uiElementID + " Val: " + uiElementVal );
		sendUICommand( uiElementID, uiElementVal );
	});
	
	$('.radioBtn').on('change', function(){
		var uiElementID = $(this).attr("id");
		console.log(uiElementID);
		//access value of changed radio group with $(this).val()
		var uiElementVal = $(this).val();
		console.log("Element ID: " + uiElementID + " Val: " + uiElementVal );
		sendUICommand( uiElementID, uiElementVal );
	});
	
	// Slider UI element incomplete so this chunk of code is too
	/*$('#slider').on('change', function(){
		var uiElementID = $(this).attr("id");
		console.log(uiElementID);
		//access value of changed radio group with $(this).val()
		var uiElementVal = $(this).val();
		console.log("Element ID: " + uiElementID + " Val: " + uiElementVal );
		sendUICommand( uiElementID, uiElementVal );
	});*/
};