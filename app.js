const express = require('express');
const app = express()

// setting the template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));

//routes
app.get('/', (req, res)=>{
    res.render("index");
})

//
server = app.listen(3001);

//socket.io instantiation
const io = require("socket.io")(server)


//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')

    //default username
    socket.username="Anonymous"

    //listen for any name change
    socket.on('change_username', (data)=>{
        socket.username= data.username

    })

      //listen on new_message
      socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
});
    