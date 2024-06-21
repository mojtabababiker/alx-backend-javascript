const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const expect = chai.expect;

describe('Test getPaymentTokenFromAPI', function () {
    it('Test calling the function with false as argument',
        function () {
            const result = getPaymentTokenFromAPI(false);
            expect(result).to.be.undefined;
        }
    );

    it('Test calling the function with true as argument',
        function (done) {
            const result = getPaymentTokenFromAPI(true);
            result.then((data) => {
                expect(data.data === 'Successful response from the API').to.be.true;
                done();
            });
        }
    );
});
