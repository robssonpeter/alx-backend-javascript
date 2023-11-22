question = "Welcome to Holberton School, what is your name?";
process.stdin.setEncoding('utf8');
console.log(question);
process.stdin.on('data', (name) => {
    name = name.trim()
    console.log(`Your name is: ${name}`);
    console.log(process);
    process.exit();
})

process.on('exit', (code) => {
    console.log(`This important software is now closing`)
    process.exit()
})