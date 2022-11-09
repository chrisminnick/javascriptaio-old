const http = require('http');
const fs = require('fs');
const path = require('path');

function getBase64Image(img) {
  // Read the image as a binary data
  const bitmap = fs.readFileSync(img);
  // Convert binary data to base64 encoded string
  return bitmap.toString('base64');
}

http
  .createServer(function (req, res) {
    // Set the response HTTP header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send the response body
    res.write('<img src="data:image/png;base64,');
    res.write(getBase64Image(path.join(__dirname, 'images', 'nodejs.png')));
    res.end('"/>');
  })
  .listen(8081);

console.log('Server running at http://localhost:8081/');
