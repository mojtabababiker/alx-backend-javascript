const request = require('request');
const { expect } = require('chai');
const { response } = require('express');

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
})