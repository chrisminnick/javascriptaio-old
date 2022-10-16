const http = require('http');
const fs = require('fs');
const path = require('path');
const util = require('util');

const logFile = path.join(__dirname, 'logFile.txt');

const logFileStream = fs.createWriteStream(logFile);

const log = util.promisify(logFileStream.write).bind(logFileStream);

const server = http.createServer((req, res) => {
  log(
    `${new Date().toString()} ${req.method} ${req.url} ${
      req.headers['user-agent']
    }
    
    `
  )
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World');
    })
    .catch((err) => {
      console.log(err);
    });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
