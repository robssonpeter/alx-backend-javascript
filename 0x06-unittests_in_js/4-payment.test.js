const Utils = require('./utils.js')
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment.js');

//const stub = sinon.stub(Utils, 'calculateNumber').yield(10);


const total = Utils.calculateNumber('SUM', 100, 20)

describe('Testing for the sendPayment Stubbed', () => {
    let stub;
    let spy;
    before(() => {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        spy = sinon.spy(console, 'log');
    });
    it(`#should log the correct total`,() => {
        sendPaymentRequestToApi(100, 20);

        spy.calledWith(`The total is: ${total}`);
    })

    after(() => {
        sinon.restore();
        stub.restore();
    })
});
