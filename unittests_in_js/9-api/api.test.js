const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('returns status 200', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('returns correct body', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('returns 200 for numeric id', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('returns correct body for numeric id', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('returns 404 for non-numeric id', (done) => {
    request.get('http://localhost:7865/cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
