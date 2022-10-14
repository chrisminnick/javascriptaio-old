import {Stream} from 'stream';
const readableStream = new Stream.Readable();
readableStream._read = () => {};
setInterval(() => {
  console.clear();
  readableStream.push(new Date().toString());
}, 1000);
readableStream.pipe(process.stdout);

