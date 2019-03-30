var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var config = require('./config');
var compress = require('compression');
app.use(compress({
    threshold: 0, //or whatever you want the lower threshold to be
    filter: function (req, res) {
        var ct = res.get('content-type')
        return true
    }
}));
var everyauth = require('everyauth');
everyauth.debug = true
app.configure(function () {
    app.set('port', process.env.PORT || config.port);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('azure zomg'));
    app.use(express.session());
    app.use(everyauth.middleware(app));
    app.use(require('less-middleware')(path.join(__dirname, '/public')));
    app.use(express.static(path.join(__dirname, '/public'), { maxAge: "30d" }));
    app.use(express.static(__dirname + '/public'), { maxAge: "30d" });
    app.use(app.router);
});
app.configure('development', function () {
    app.use(express.errorHandler());
});
require('./routes/init')(app);
var server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log("Sportbook server listening on port " + app.get('port'));
});