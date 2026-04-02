const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounds both and sums integers', () => assert.strictEqual(calculateNumber(1, 3), 4));
  it('rounds b up', () => assert.strictEqual(calculateNumber(1, 3.7), 5));
  it('rounds a down', () => assert.strictEqual(calculateNumber(1.2, 3.7), 5));
  it('rounds a up at .5', () => assert.strictEqual(calculateNumber(1.5, 3.7), 6));
  it('rounds both down', () => assert.strictEqual(calculateNumber(1.4, 3.4), 4));
  it('rounds both up', () => assert.strictEqual(calculateNumber(1.6, 3.6), 6));
  it('handles zero', () => assert.strictEqual(calculateNumber(0, 0), 0));
  it('handles negative numbers', () => assert.strictEqual(calculateNumber(-1.5, 3.5), 6));
  it('rounds negative .5 toward zero', () => assert.strictEqual(calculateNumber(-1.4, 0), -1));
  it('large numbers', () => assert.strictEqual(calculateNumber(100.4, 200.6), 301));
});
