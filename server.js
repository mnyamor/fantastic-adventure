var express = require('express'); 

//create our app with express..
var app = express(); 

// declare our port (what our server will be listening to)
var port = process.env.PORT || 8080;

//HTTP request logger middleware for node.js
var morgan = require('morgan');

app.use(morgan('dev'));
app.use('/', function (req , res) {
    res.send('first express program');
});
app.listen(port);
console.log('server running on port ' + port);