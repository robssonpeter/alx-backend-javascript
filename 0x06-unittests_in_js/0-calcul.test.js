const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('testing the summation', () => {
    it('checking the result for summation', () => {
        assert.equal(calculateNumber('SUM', 4.3, 4.8), 9);
    });

    it('checking the result for subtraction', () => {
        assert.equal(calculateNumber('SUBTRACT', 4.3, 4.8), -1);
    });
    
    it('Checking the result for division', () => {
        assert.equal(calculateNumber('DIVIDE', 4.3, 4.8), 0.8);
        assert.equal(calculateNumber('DIVIDE', 4.3, 0.4), 'Error');
    });
});