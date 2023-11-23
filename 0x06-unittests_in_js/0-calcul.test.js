const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('testing the summation', () => {
    it('checking the result', () => {
        assert.equal(calculateNumber(4.3, 4.8), 9);
    })
})