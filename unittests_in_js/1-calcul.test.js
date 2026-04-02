const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('1.4 + 4.5 = 6', () => assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6));
    it('1 + 3 = 4', () => assert.strictEqual(calculateNumber('SUM', 1, 3), 4));
    it('1.5 + 3.7 = 6', () => assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6));
    it('0 + 0 = 0', () => assert.strictEqual(calculateNumber('SUM', 0, 0), 0));
  });

  describe('SUBTRACT', () => {
    it('1.4 - 4.5 = -4', () => assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4));
    it('5 - 3 = 2', () => assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2));
    it('1.5 - 3.7 = -2', () => assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2));
    it('0 - 0 = 0', () => assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0));
  });

  describe('DIVIDE', () => {
    it('1.4 / 4.5 = 0.2', () => assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2));
    it('divide by 0 returns Error', () => assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error'));
    it('divide by 0.2 (rounds to 0) returns Error', () => assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error'));
    it('4 / 2 = 2', () => assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2));
  });
});
