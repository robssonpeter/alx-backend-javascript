const calculateNumber = require('./1-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('checking the result for summation with chai', () => {
    it(`#calculateNumber('SUM', 4.3, 4.8) -> 9`, () => {
        expect(calculateNumber('SUM', 4.3, 4.8)).to.equal(9)
    });
});

describe('checking the result for subtraction with chai', () => {
    it(`#calculateNumber('SUBTRACT', 4.3, 4.8) -> -1`, () => {
        expect(calculateNumber('SUBTRACT', 4.3, 4.8)).to.equal(-1);
    });
});

describe('Checking the result for division with chai', () => {
    it(`#calculateNumber('DIVIDE', 4.3, 4.8) == 0.8`, () => {
        expect(calculateNumber('DIVIDE', 4.3, 4.8)).to.equal(0.8);
    });

    it(`#calculateNumber('DIVIDE', 4.3, 0.4) == Error`, () => {
        expect(calculateNumber('DIVIDE', 4.3, 0.4)).to.equal('Error')
    })
})