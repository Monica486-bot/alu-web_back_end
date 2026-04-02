const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('stubs Utils.calculateNumber to return 10 and logs correct message', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    spy.restore();
  });
});
