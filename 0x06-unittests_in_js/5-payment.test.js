const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');


describe('Testing for the sendPayment', () => {
    let spy;
    let total;
    before(() => {
        spy = sinon.spy(console, 'log');
    });
    it(`#should log the correct total 120`,() => {
        total = Utils.calculateNumber('SUM', 100, 20);
        sendPaymentRequestToApi(100, 20);

        spy.calledOnceWith(`The total is: ${total}`);
    })

    it("#returns total 20", () => {
        total = Utils.calculateNumber('SUM', 10, 10);
        sendPaymentRequestToApi(10, 10);

        spy.calledOnceWith(`The total is: ${total}`);
    })

    after(() => {
        sinon.restore();
    })
});
