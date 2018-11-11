const express = require('express');
const app = express()

// setting the template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));

//routes
app.get('/', (req, res)=>{
    res.send("hello there!!");
})

//
app.listen(3000, function() {
    console.log("Server started!!");
});