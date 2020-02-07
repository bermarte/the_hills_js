// import default from modules
import convertor from '../src/RomanConvertor';

// Write ES6 mocha tests with Chai assertions
describe('convertor-tester', () => {
  it('should return I for the number 1', () => {
    expect(convertor.calc(1)).to.equal('I');
  });
  it('should return II for the number 2', () => {
    expect(convertor.calc(2)).to.equal('II');
  });
  it('should return III for the number 3', () => {
    expect(convertor.calc(3)).to.equal('III');
  });
  it('should return IV for the number 4', () => {
    expect(convertor.calc(4)).to.equal('IV');
  });

});
