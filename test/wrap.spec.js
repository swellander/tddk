const { expect } = require('chai');
const wrap = require('../wrap');

describe('wrap kata', () => {
  let wrapped;
  it('returns an empty str when provided one', () => {
    expect(wrap('', 10)).to.eql('');
  });
  it('returns the input str, unchanged if passed a column number greater than the length of the input str', () => {
    expect(wrap('this is short', 24)).to.equal('this is short');
  });
  it('returns at least one newline char if length of string is greater than col number', () => {
    wrapped = wrap('should be two lines', 11);
    expect(wrapped.split('').filter(char => char === '\n').length).to.equal(1)
  });
  it(`it does'nt add newlines in the middle of words`, () => {
    wrapped = wrap('this face is', 7);
    expect(wrapped).to.equal('this \nface is');
  });
  it('only cuts lines shorter than column length, not longer', () => {
    wrapped = wrap('hey there john', 8);
    expect(wrapped).to.equal('hey \nthere john');
  });
  it('can split more than once', () => {
    wrapped = wrap('hey there a squirrel is climbing up a tree!', 10)
    expect(wrapped.split('').filter(char => char === '\n').length).to.equal(4) 
  });
  it('can handle many splits', () => {
    wrapped = wrap(`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, 10);
    const newLineArr = wrapped.split('').filter(char => char === '\n')
    expect(newLineArr.length).to.equal(61);
  })
})
