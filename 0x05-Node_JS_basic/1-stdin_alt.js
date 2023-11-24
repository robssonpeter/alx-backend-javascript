console.log("Welcome to Holberton School, what is your name?")
process.stdin.on('data', (name) => {
    console.log(`Your name is: ${name}`);
    process.exit()
});

process.on('exit', () => {
    console.log('This important software is now closing');
})