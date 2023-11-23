const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe("Testing async function", () => {
    let text = "should resolve {data: 'Successful response from the API' }"
    it(text, async () => {
        const result = await getPaymentTokenFromAPI(true);
        const equalObj = {data: 'Successful response from the API'}
        expect(result).to.deep.equal(equalObj);
    });
});