import fs from 'fs';

const readStream = fs.createReadStream(process.cwd() + '/inputFile.txt');
readStream.on('open', function () {
  readStream.pipe(process.stdout);
});
