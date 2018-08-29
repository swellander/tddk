const { expect } = require('chai');
const twoSum = require('../twoSum');

describe('twoSum function', () => {
  let sum;
  it('exists', () => {
    expect(twoSum).to.be.ok;
  });

  it('returns an empty array if passed one', () => {
    expect(twoSum([], 14)).to.eql([])
  });

  it('returns two indecies from the input arr whos values sum to the second arg', () => {
    sum = twoSum([1,2,3], 3);
    expect(sum).to.eql([0,1]);
  });

})
