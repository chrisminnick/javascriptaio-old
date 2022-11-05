// REST API server with login and CRUD operations for a social network app using mongoDB

// Importing the required modules
const http = require('http');
const app = require('./app');

// Creating the server
const port = process.env.PORT || 3000;
const server = http.createServer(app);

// Listening to the server
server.listen(port, () => {
  console.log('Server is running on port ' + port);
});
