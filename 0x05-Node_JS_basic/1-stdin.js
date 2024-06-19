// work with stdin and stdout in nodejs

let name = null;
console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  name = process.stdin.read();
  if (name !== null) {
    console.log(`Your name is: ${name.trim()}`);
    process.stdin.emit('end');
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
