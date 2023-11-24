const question = 'Welcome to Holberton School, what is your name?';
process.stdin.setEncoding('utf8');
console.log(question);
process.stdin.on('data', (name) => {
  console.log(`Your name is: ${name.trim()}`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
  process.exit();
});
