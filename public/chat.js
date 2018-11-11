$(function(){
    //make a connection
    
    var socket = io.connect('http://localhost:3001');
    //buttons and inputs
	var message = $("#message")
	var username = $("#username")
	var send_message = $("#send_message")
	var send_username = $("#send_username")
	var chatroom = $("#chatroom")
	var feedback = $("#feedback")

	//Emit message
	send_message.click(function(){
        socket.emit('new_message', {message : message.val()})
        console.log("send message clicked", message.val())
    })


	//Emit a username
	send_username.click(function(){
        socket.emit('change_username', {username : username.val()})
        console.log("send username clicked", username.val())
        
	})
})