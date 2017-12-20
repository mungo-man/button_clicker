var express = require('express')
var app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var total = 0;
var highScore = 15;
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render("index.ejs");
});
io.on('connection', function(socket){

});

server.listen(process.env.PORT, function(){
  console.log('server up');
});
