
/**
 * Module dependencies.
 */

var express = require('express')
  , controller = require('./controller')
  , record = require('./controller/record')
  //, user = require('./routes/user')
  , http = require('http')
  , path = require('path');
  //, rainbow = require('rainbow');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// production only
if ('production' == app.get('env')) {
  
}

console.log('\033[91m' + 'hello' + '\033[39m' + ' world');

/*rainbow.route(app,{
	controller:'/controller/'
})*/

app.get('/', controller.index);
app.get('/record', record.record);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
