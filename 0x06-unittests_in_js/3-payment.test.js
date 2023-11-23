const Utils = require('./utils.js')
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');

const spy = sinon.spy(console, 'log');

sendPaymentRequestToApi(100, 20);

const total = Utils.calculateNumber('SUM', 100, 20)

describe('Testing for the sendPayment Function', () => {
    it(`#The total is: ${total}`,() => {
        spy.calledWith(`The total is: ${total}`);
    })
})

spy.restore();
