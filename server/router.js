const router = require('express').Router();

const path = require('path');
const staticPath = require('./static-path');

// Global Key
const apiKey = '12sdf234';

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
  // Dummy Check For Now
  if (user && password) {
    // Send user & apiKey
    res.json({
      user,
      apiKey,
    });
  }
});

// Api Requests (as post)
router.post('/data', function(req, res) {
  // Validate Key
  if (req.body.apiKey === apiKey) {
    // send JSON response with latest data
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
