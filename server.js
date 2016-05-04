var express = require('express'); 

//create our app with express..
var app = express(); 

// declare our port (what our server will be listening to)
var port = process.env.PORT || 8080;

//HTTP request logger middleware for node.js
var morgan = require('morgan');

var cookieParser = require('cookie-parser'); 
var session = require('express-session'); 


app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({ secret:'anystringoftext', saveUninitialized: true, resave: true }));

app.use('/', function (req , res) {
    res.send('first express program');
    console.log(req.cookies);
    console.log('=============== awesomeness ================= ');
    console.log(req.session);

});
app.listen(port);
console.log('server running on port ' + port);