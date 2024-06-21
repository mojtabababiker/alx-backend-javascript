// test the sendPaymentsRequestToAPi function
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

const expect = chai.expect;

describe('Unit test sendPaymentRequestToApi', function () {
    let spyConsoleLog;
    this.beforeEach(() => {
        spyConsoleLog = sinon.spy(console, 'log');
    });
    this.afterEach(() => {
        spyConsoleLog.restore();
    });

    it('Test calling console.log with right value 120', function () {
        sendPaymentRequestToApi(100, 20);
        expect(spyConsoleLog.calledOnceWith(`The total is: ${120}`)).to.be.true;
    });

    it('Test calling console.log with right value 20', function () {
        sendPaymentRequestToApi(10, 10);
        expect(spyConsoleLog.calledOnceWith(`The total is: ${20}`)).to.be.true;
    });
});
