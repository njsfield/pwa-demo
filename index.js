const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Data = require('./data');
const app = express();

// Global Key
const apiKey = '12sdf234';

// Configure port
// 9000 should be used for development
const port = process.env.PORT || 9000;
const host = process.env.HOST || 'http://localhost';

// Data Store
const dataStore = new Data();

// Static
app.use(express.static(path.join(__dirname, 'build')));
// Body Parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// Send (helper funcs)
const send_ = (res, dir, file) => res.sendFile(path.join(__dirname, dir, file));
// Main App
const sendApp = res => send_(res, 'build', 'index.html');

/********
 Requests
********/

// Post to login
app.post('/login', function(req, res) {
  const {user, password} = req.body;
  // Dummy Check For Now
  if (user && password) {
    // Send user & apiKey
    res.json({
      user,
      apiKey,
    });
  }
});

// Send App
app.get('/*', function(req, res) {
  sendApp(res);
});

// Api Requests (as post)
app.post('/data', function(req, res) {
  // Validate Key
  if (req.body.apiKey === apiKey) {
    // Update Data Store
    dataStore.updateData();
    // send JSON response with latest data
    res.json({
      results: dataStore.getLatest(),
    });
  }
});

// For historical Data requests
app.post('/historical', function(req, res) {
  // send JSON response with oldest data record (-9 records)
  res.json({
    results: dataStore.getOldest(),
  });
});


// Dev requests not recognised will be proxied
app.listen(port, () => console.log(`Live at ${host}:${port}`));
