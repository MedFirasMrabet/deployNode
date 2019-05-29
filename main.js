var express = require('express');
var app = express();
const msg = {
    msg: 'Hello World!'
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// Routes
app.get('/', function(req, res) {
  res.json(msg);
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);