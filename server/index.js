const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Data = require('./data');
const app = express();
const router = require('./router');

// Global Key
const apiKey = '12sdf234';

// Data Store
const dataStore = new Data();

// Static
app.use(express.static(path.join(__dirname, '../build')));


// Body Parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// Call router
app.use('/', router);

// Default export
module.exports = app;
