const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('checking the result for summation', () => {
    it(`#calculateNumber('SUM', 4.3, 4.8) -> 9`, () => {
        assert.equal(calculateNumber('SUM', 4.3, 4.8), 9);
    });
});

describe('checking the result for subtraction', () => {
    it(`#calculateNumber('SUBTRACT', 4.3, 4.8) -> -1`, () => {
        assert.equal(calculateNumber('SUBTRACT', 4.3, 4.8), -1);
    });
});

describe('Checking the result for division', () => {
    it(`#calculateNumber('DIVIDE', 4.3, 4.8) == 0.8`, () => {
        assert.equal(calculateNumber('DIVIDE', 4.3, 4.8), 0.8);
    });

    it(`#calculateNumber('DIVIDE', 4.3, 0.4) == Error`, () => {
        assert.equal(calculateNumber('DIVIDE', 4.3, 0.4), 'Error');
    })
})