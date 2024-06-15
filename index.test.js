const exp = require('constants');
const functions = require('./index.js');

describe('Capitalise Function', () => {
  test('No input', () => {
    expect(functions.capitalize()).toBe(null);
  });
  test('Capitalise abc to ABC', () => {
    expect(functions.capitalize('abc')).toBe('ABC');
  });
  test('Can use non letter characters', () => {
    expect(functions.capitalize('Hello, World!')).toBe('HELLO, WORLD!');
  });
});

describe('Reverse String Function', () => {
  test('No input', () => {
    expect(functions.reverseString()).toBe(null);
  });
  test('Reverses String', () => {
    expect(functions.reverseString('abc')).toBe('cba');
  });
});

describe('Calculator Object', () => {
  let calc = functions.calculator();
  test('Add', () => {
    expect(calc.add(1,2)).toBe(3);
  });
  test('Subtract', () => {
    expect(calc.subtract(4,2)).toBe(2);
  });
  test('Multiply', () => {
    expect(calc.multiply(2,2)).toBe(4);
  });
  test('Divide', () => {
    expect(calc.divide(10,2)).toBe(5);
  })
});

describe('Caesar Cipher', () => {
  test('Shift abc by 1 to bcd', () => {
    expect(functions.caesarCipher('abc', 1)).toBe('bcd');
  });
});

describe('Analyze Array', () => {
  test('Correct analysis of array', () => {
    expect(functions.analyzeArray([1,2,3,4,5])).toEqual({
      'average': 3,
      'min': 1,
      'max': 5,
      'length': 5
    });
  });
});