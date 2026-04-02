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

describe('/available_payments', () => {
  it('returns status 200', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('returns correct payment methods object', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(JSON.parse(body)).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});

describe('/login', () => {
  it('returns status 200', (done) => {
    request.post({ url: 'http://localhost:7865/login', json: { userName: 'Betty' } }, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('returns welcome message with username', (done) => {
    request.post({ url: 'http://localhost:7865/login', json: { userName: 'Betty' } }, (err, res, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
