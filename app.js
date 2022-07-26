
const express = require('express');
const todoController = require('./controllers/todoController')

var app = express();
// set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

// fire controller
todoController(app);

//port
app.listen(3620);
console.log('Port is starting http://localhost:3620/'); 