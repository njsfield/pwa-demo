const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Global Key
const apiKey = "12sdf234"

// Generate Random Num-String Array
const randomNumStringArray = () =>
  ["","","",""]
     .map(x => Math.random() * 2000)
     .map(Math.floor)
     .map(x => x.toString())



// Static
app.use(express.static(path.join(__dirname, 'build')));
// Body Parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Send (helper funcs) 
const send_ = (res, dir, file) => 
  res.sendFile(path.join(__dirname, dir, file));
// Main App
const sendApp   = (res) => send_(res, "build", "index.html");



/********
 Requests 
********/




// Post to login
app.post('/login', function (req, res) {
  const { user, password } = req.body;
  // Dummy Check For Now
  if (user && password) {
    // Send user & apiKey
    res.json({
      user,
      apiKey
    })
  } 
});

// Send App 
app.get('/*', function(req, res){
  sendApp(res) 
});

// Api Requests (as post) 
app.post('/data', function(req,res){
  // Validate Key
  if (req.body.apiKey === apiKey) {
    // send JSON response with random string array
    res.json({ 
      results : randomNumStringArray() 
    }) 
  }
});


app.listen(9000, () => console.log(`Live at http://localhost:9000`));
