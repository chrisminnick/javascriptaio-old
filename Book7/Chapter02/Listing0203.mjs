import server from 'http';
import fs from 'fs';

const app = server.createServer();

app.on('request', (req, res) => {
  const book = fs.createReadStream('./war-and-peace.txt');

  book.on('data', (chunk) => {
    console.log('chunk received');
    console.log(chunk);
  });
  //book.pipe(res);
  res.end();
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
