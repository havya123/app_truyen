var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressLayouts = require('express-ejs-layouts');
const mainDB = require("./src/apps/db/main_db")
const session = require('express-session')
const flash = require('express-flash')


mainDB.connection();

var app = express();

__public = __dirname + '\\public'


app.set('views', [
  path.join(__dirname, './src/views'),
]);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__public))
app.set('view engine', 'ejs'); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('SecretStringForCookies'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);

app.use(session({
  secret: 'SecretStringForSession',
  cookie:{maxAge:60000},
  resave:true,
  saveUninitialized:true
}))
app.use(flash());

app.use('/', require('./src/routes/'));
app.set('layout','index')



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.send({
  //   statusCode:err.status || 500,
  //   message: err.message,
  // })
  res.render('error');
});

module.exports = app;
