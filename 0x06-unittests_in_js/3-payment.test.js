const Utils = require('./utils.js')
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('Testing for the sendPayment Function', () => {
    let spy;
    let total;
    before(() => {
        spy = sinon.spy(console, 'log');
        total = Utils.calculateNumber('SUM', 100, 20)
    });

    it(`#The total is: ${total}`,() => {
        sendPaymentRequestToApi(100, 20);

        spy.calledWith(`The total is: ${total}`);
    })

    after(() => {
        spy.restore();
    })
});
