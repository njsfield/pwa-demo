const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

const staticPath = require('./static-path');

app.set('trust proxy', 1) // trust first proxy

// Set static file path
app.use(express.static(staticPath));

// Body Parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// Allow cookie
app.use(cookieSession({
  name: 'session',
  secret: 'cool cat',
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
  secure: process.env.NODE_ENV === 'PRODUCTION'
}))

// Call router
app.use('/', router);

// Default export
module.exports = app;
