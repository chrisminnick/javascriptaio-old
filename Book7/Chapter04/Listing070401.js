import fs from 'fs';

// Open a file for reading and writing, or create it if it doesn't exist
const fd = fs.open('data.txt', 'w+', (err, fd) => {
  // If something goes wrong, display the error
  if (err) {
    console.log(err);
    return;
  } else {
    // create a buffer containing 100 printable characters (ASCII 33-126)
    const buffer = Buffer.alloc(100);
    for (let i = 0; i < 100; i++) {
      buffer[i] = Math.floor(Math.random() * 93) + 33;
    }
    // write the buffer to the file
    fs.write(fd, buffer, 0, 100, 0, (err, written, buffer) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(`Your new secure password is ${buffer.toString('ascii')}`);
      }
    });
    // close the file
    fs.close(fd, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
});
