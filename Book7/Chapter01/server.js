// a node.js web server
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Node!');
});
server.listen(3000);
console.log('Server running at http://localhost:3000/');