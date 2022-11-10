import { promises as fs } from 'fs';

// create a file and write 100 random printable characters to it
async function main() {
  const fd = await fs.open('data.txt', 'w+');
  const buffer = Buffer.alloc(100);
  for (let i = 0; i < 100; i++) {
    buffer[i] = Math.floor(Math.random() * 93) + 33;
  }
  await fd.write(buffer, 0, 100, 0);
  await fd.close();
  console.log(`Your new secure password is ${buffer.toString('ascii')}`);
}

main();
