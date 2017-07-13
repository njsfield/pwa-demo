const router = require('express').Router();

const path = require('path');
const staticPath = require('./static-path');

// Data Store
const db = require('./db');



/********
 Requests
********/


// Send App
router.get('/*', function(req, res) {
  // Send main app
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Post to login
router.post('/login', function(req, res) {
  const {user, password} = req.body;
  // Authenticate username & password
  if (db.authenticate({user,password})) {
    // Define authenticated session
    req.session.authenticated = true;
    res.send(JSON.stringify({response: "ok"}))
    // req.session.save('hello')
  } else {
    res.status(500).json({response: "not ok"});
  }
});

// Api Requests (as post)
router.post('/data', function(req, res) {
  // Validate Key
  if (req.session.authenticated) {
    // Define authenticated session
    req.session.authenticated = true;
    res.json({
      results: db.getLatest(),
    });
  }
});

// For historical Data requests
router.post('/historical', function(req, res) {
  // send JSON response with oldest data record (-9 records)
  res.json({
    results: db.getOldest(),
  });
});

// Default export
module.exports = router;
