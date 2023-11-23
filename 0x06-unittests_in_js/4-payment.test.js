const Utils = require('./utils.js')
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment.js');

const spy = sinon.spy(console, 'log');

//const stub = sinon.stub(Utils, 'calculateNumber').yield(10);


sendPaymentRequestToApi(100, 20);

const total = Utils.calculateNumber('SUM', 100, 20)

describe('Testing for the sendPayment Stubbed', () => {
    before('calculating the total', () => {
        sinon.stub(Utils, 'calculateNumber').returns(10);
    });
    it(`#The total is: 10`,() => {
        spy.calledWith(`The total is: ${total}`);
    })
})

spy.restore();
