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
const authUtils = require('./util/authUtils');
const session = require('express-session');


var app = express();
app.use(session({
  secret: 'my_secret_password',
  resave: false
}));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if (!res.locals.loginError) {
    res.locals.loginError = undefined;
  }
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


const i18n = require('i18n');
i18n.configure({
  locales: ['pl', 'en'],
  directory: path.join(__dirname, 'locales'),
  objectNotation: true,
  cookie: 'acme-hr-lang',
  defaultLocale: 'pl',
  register: global
});

app.use((req, res, next) => {
  if (!res.locals.lang) {
    const currentLang = req.cookies['acme-hr-lang'];
    res.locals.lang = currentLang;
  }
  next();
});

app.use('/', indexRouter);
app.use('/students', authUtils.permitAuthenticatedUser, studentRouter);
app.use('/teachers', authUtils.permitAuthenticatedUser, teacherRouter);
app.use('/groups', authUtils.permitAuthenticatedUser, groupRouter);
app.use('/enrollments', authUtils.permitAuthenticatedUser, enrollmentRouter);


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
