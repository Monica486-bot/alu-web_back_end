const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('1.4 + 4.5 = 6', () => expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6));
    it('1 + 3 = 4', () => expect(calculateNumber('SUM', 1, 3)).to.equal(4));
    it('1.5 + 3.7 = 6', () => expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6));
    it('0 + 0 = 0', () => expect(calculateNumber('SUM', 0, 0)).to.equal(0));
  });

  describe('SUBTRACT', () => {
    it('1.4 - 4.5 = -4', () => expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4));
    it('5 - 3 = 2', () => expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2));
    it('1.5 - 3.7 = -2', () => expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2));
    it('0 - 0 = 0', () => expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0));
  });

  describe('DIVIDE', () => {
    it('1.4 / 4.5 = 0.2', () => expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2));
    it('divide by 0 returns Error', () => expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error'));
    it('divide by 0.2 (rounds to 0) returns Error', () => expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error'));
    it('4 / 2 = 2', () => expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2));
  });
});
