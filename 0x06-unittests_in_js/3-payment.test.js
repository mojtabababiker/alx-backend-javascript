// test the sendPaymentsRequestToAPi function
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('Unit test sendPaymentRequestToApi', function () {
    it('test calling the Utils calculateNumber method',
        function () {
            const spyCalculateNumber = sinon.spy(Utils, 'calculateNumber');
            sendPaymentRequestToApi(100, 20);
            expect(spyCalculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
            // restore the spied method
            spyCalculateNumber.restore();
        }
    );

    it('test calling console.log with the result',
        function () {
            const spyConsolLog = sinon.spy(console, 'log');
            sendPaymentRequestToApi(100, 20);
            expect(spyConsolLog.calledOnceWith(`The total is: ${120}`)).to.be.true;
            // restore the spied method
            spyConsolLog.restore();
        }
    );
});
