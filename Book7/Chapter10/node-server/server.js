require('dotenv').config();
const http = require('http');
const app = require('./app');

// Creating the server
const port = process.env.SERVER_PORT || 3000;
const server = http.createServer(app);

// Listening to the server
server.listen(port, () => {
  console.log('Server is running on port ' + port);
});
