// https://www.theodinproject.com/lessons/node-path-javascript-testing-practice

const { camelCase } = require("yargs-parser");

function capitalize(str) {
  if (typeof str !== "string") return null;
  return str.toUpperCase();
}

function reverseString(str) {
  if (typeof str !== "string") return null;
  return str.split('').reverse().join('');
}

function calculator() {
  const add = (a,b) => a + b;
  const subtract = (a,b) => a - b;
  const divide = (a,b) => a / b;
  const multiply = (a,b) => a * b;
  return {add, subtract, divide, multiply}
}

function caesarCipher(str, shift) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const isUpperCase = char => char.toUpperCase() === char;
  const isLetter = char => char.toLowerCase() !== char.toUpperCase(); 
  return str.split('').map((char) => {
    if (!isLetter(char)) return char;
    let index = (alphabet.indexOf(char.toLowerCase()) + shift) % alphabet.length;
    if (index < 0) index += alphabet.length;
    return isUpperCase(char) ? alphabet[index].toUpperCase() : alphabet[index];
  }).join('');
}

function analyzeArray(arr) {
  if (typeof arr !== "object") return undefined;
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];
  let average = 0;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let value = arr[i];
    if (value < min) min = value;
    if (value > max) max = value;
    average += value;
  }

  return {
    'average': average/length,
    'min': min, 'max': max,
    'length': length
  }
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
}