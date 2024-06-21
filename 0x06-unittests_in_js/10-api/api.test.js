const request = require('request');
const { expect } = require('chai');

const URL = 'http://localhost:7865';

describe('Integration test for the app', function () {
    it('Test index page',
        function (done) {
            request.get(`${URL}/`, (error, response, body) => {
                // console.log(body);
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
        }
    );

    it('Test cart page with correct id',
        function (done) {
            request.get(`${URL}/cart/12`, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Payment methods for cart 12');
                done();
            });
        }
    );

    it('Test cart page with wrong id',
        function (done) {
            request.get(`${URL}/cart/12a`, (error, response, body) => {
                expect(response.statusCode).to.equal(404);
                // expect(body).to.equal('Payment methods for cart 12');
                done();
            });
        }
    );

    it('Test login page with request body',
        function (done) {
            const option = {
                url: `${URL}/login`,
                body: JSON.stringify({ 'userName': 'Betty' }),
                headers: { "content-type": "application/json" },
            }
            request.post(option, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome Betty');
                done();
            });
        }
    );

    it('Test login page with no request body',
        function (done) {
            const option = {
                url: `${URL}/login`,
                body: JSON.stringify({}),
                headers: { "content-type": "application/json" },
            }
            request.post(option, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome undefined');
                done();
            });
        }
    );

    it('Test available_payments page',
        function (done) {
            request.get(`${URL}/available_payments`, (error, response, body) => {
                const expectedResult = {
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                }
                expect(response.statusCode).to.equal(200);
                expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
                expect(JSON.parse(body)).to.eql(expectedResult);

                done();
            });
        }
    )
});
