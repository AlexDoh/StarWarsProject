let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let users = require('./routes/heroes');


let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/public/stylesheets/style.css',express.static(path.join(__dirname, 'public/stylesheets/style.css')));
app.use('/public/javascripts/main.js',express.static(path.join(__dirname, 'public/javascripts/main.js')));
app.use('/public/images/c-3p0.png',express.static(path.join(__dirname, 'public/images/c-3p0.png')));
app.use('/public/images/background.jpg',express.static(path.join(__dirname, 'public/images/background.jpg')));

app.use('/', index);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/heroes', users);

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
