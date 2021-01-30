var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const studentRouter = require('./routes/studentRoute');
const teacherRouter = require('./routes/teacherRoute');
const groupRouter = require('./routes/groupRoute');
const enrollmentRouter = require('./routes/enrollmentRoute');
const stdApiRouter = require('./routes/api/StudentApiRoute');
const tchApiRouter = require('./routes/api/TeacherApiRoute');
const grpApiRouter = require('./routes/api/GroupApiRoute');
const enrApiRouter = require('./routes/api/EnrollmentApiRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
app.use('/groups', groupRouter);
app.use('/enrollments', enrollmentRouter);


app.use('/api/students', stdApiRouter);
app.use('/api/teachers', tchApiRouter);
app.use('/api/groups', grpApiRouter);
app.use('/api/enrollments', enrApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
