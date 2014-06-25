

var express = require('express');
var app     = express();
var path = require('path');
var port    = 	process.env.PORT || 3000;
var routes = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', routes);

app.listen(port);
