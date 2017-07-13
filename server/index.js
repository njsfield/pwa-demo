const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

const staticPath = require('./static-path');

// Set static file path
app.use(express.static(staticPath));

// Body Parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// Call router
app.use('/', router);

// Default export
module.exports = app;
