const {spawn} = require('child_process')

const lister = spawn('ls', ['-l'], {cwd: '.'})

lister.stdout.on('data', (data) => {
    console.log(`${data}`);
});

lister.on('exit', (code) => {
    console.log(`Process ${lister.pid} exited with code ${code}`);
})