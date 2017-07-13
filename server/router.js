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
    res.status(200).json({response: "ok"});
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
    res.status(200).json({
      results: db.getLatest(),
    });
  } else {
    res.status(500).json({response: "not ok"});
  }
});

// For historical Data requests
router.post('/historical', function(req, res) {
  // send JSON response with oldest data record (-9 records)
  if (req.session.authenticated) {
    res.status(200).json({
      results: db.getOldest(),
    });
  } else {
    res.status(500).json({response: "not ok"});
  }
});


// Default export
module.exports = router;
