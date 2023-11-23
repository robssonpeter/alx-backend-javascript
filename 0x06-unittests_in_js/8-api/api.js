const express = require('express');

app = express();

app.get('/', (res, req) => {
    req.send('Welcome to the payment system');
})

app.listen(7865, 'localhost', () => {
    console.log('API available on localhost port 7865');
})

module.exports = app