// #!/usr/bin/nodejs 
// ABOVE LINE FOR TJ SERVER

var express = require('express');
var path = require('path')
var app = express();


app.use("/css",  express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/media", express.static(__dirname + '/media'));

// app.use("/Lab_1", express.static(__dirname + '/Lab_1'));

// app.use("/Lab_2", express.static(__dirname + '/Lab_2'));

// app.use("/Lab_3", express.static(__dirname + '/Lab_3'));

// app.use("/Lab_4", express.static(__dirname + '/Lab_4'));

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {	
   //res.send('Hello there peoples @\n' + req.connection.remoteAddress);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/hello.txt', function(req, res){
    var body = 'Hello World. It\'s me';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
});

var listener = app.listen(app.get('port'), function() {
  console.log( listener.address().port );
});
