/*
Title : Factorial
Author : Maruf Hasan
Description : find out the factorial of a number like => (5!) : factorial of 5;
Date : 5 October , 2021
*/

//dependencies
const error = require('./../error.js');

//main function to export
function fact(number) {
  let result = 1;
  let num = typeof(number) === 'number' && number >= 0 && Number.isInteger(number) ? number : NaN;
  if (num) {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  } else if (num === 0) {
     result = result;
  } else {
    error('a valid number', 'number', 'fact()', TypeError, 'Be sure the number is an integer type number');
  }
  return result; //Bigint(result);
}
//export and share
module.exports = fact;