var express = require('express')
var app = express();
// console.log(app);
var expressLayouts = require('express-ejs-layouts');
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('port',(process.env.PORT||3000));
http.listen (app.get('port'),function(){
  console.log("listening to port number "+app.get('port'));
});
app.use(expressLayouts);
app.set('layout');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get( '/', function(req, res) {
	res.render('arena');
});