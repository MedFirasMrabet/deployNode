var express = require('express');
var app = express();
const msg = {
    msg: 'Hello World!'
}
// Routes
app.get('/', function(req, res) {
  res.send(msg);
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);