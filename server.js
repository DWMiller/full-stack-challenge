require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const errorHandlers = require('./errorHanders');

mongoose.connect(process.env.DATABASE);
mongoose.connection.on('error', err => {
  console.error(`${err.message}`);
});

require('./models/Review');
const User = require('./models/User');

const routes = require('./routes');

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const app = express();
const port = process.env.PORT || 5000;

// app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use('/', routes);

app.use(errorHandlers.notFound);

if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

app.listen(port, () => console.log(`Listening on port ${port}`));
