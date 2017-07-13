const app = require('./server');
// Configure port
// 9000 should be used for development
const port = process.env.PORT || 9000;
const host = process.env.HOST || 'http://localhost';


// Dev requests not recognised will be proxied
app.listen(port, () => console.log(`Live at ${host}:${port}`));
