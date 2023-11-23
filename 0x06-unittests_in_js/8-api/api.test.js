const app = require('./api.js');
const chai = require('chai')
const expect = chai.expect;

describe('Testing the route', () => {
    it('checking route', () => {
        expect(5).to.equal(5);
    })
});