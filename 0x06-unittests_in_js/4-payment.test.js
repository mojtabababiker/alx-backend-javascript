// test the sendPaymentsRequestToAPi function
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('Unit test sendPaymentRequestToApi', function () {
    it('test calling the Utils calculateNumber method',
        function () {
            const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
            sendPaymentRequestToApi(100, 20);
            expect(stubCalculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
            // restore the spied method
            stubCalculateNumber.restore();
        }
    );

    it('test calling console.log with the result',
        function () {
            const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
            const stubConsolLog = sinon.stub(console, 'log');
            sendPaymentRequestToApi(100, 20);
            expect(stubConsolLog.calledOnceWith(`The total is: ${10}`)).to.be.true;
            // restore the spied method
            stubConsolLog.restore();
            stubCalculateNumber.restore();
        }
    );
});
