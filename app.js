var express = require('express');

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

var port = normalizePort(process.env.PORT || '3000');

app.listen(port);
