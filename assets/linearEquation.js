/*
Title : 
Author : Maruf Hasan
Description :
Date : , 2021
*/

//dependencies
const error = require('./../error.js');

//main function to export
function linearEq(first_Equation, second_Equation) {
  let fstEq = Array.isArray(first_Equation) && first_Equation.length === 3 ? first_Equation : undefined;
  let secEq = Array.isArray(second_Equation) && second_Equation.length === 3 ? second_Equation : undefined;
  if (fstEq && secEq) {
    //@gettin all data;
    let
      a1 = typeof(fstEq[0]) === 'number' ? fstEq[0] : error('a number', '1st value of first_Equation', 'linearEq()'),
      b1 = typeof(fstEq[1]) === 'number' ? fstEq[1] : error('a number', '2nd value of first_Equation', 'linearEq()'),
      c1 = typeof(fstEq[2]) === 'number' ? fstEq[2] : error('a number', '3rd value of first_Equation', 'linearEq()'),
      a2 = typeof(secEq[0]) === 'number' ? secEq[0] : error('a number', '1st value of second_Equation', 'linearEq()'),
      b2 = typeof(secEq[1]) === 'number' ? secEq[1] : error('a number', '2nd value of second_Equation', 'linearEq()'),
      c2 = typeof(secEq[2]) === 'number' ? secEq[2] : error('a number', '3rd value of second_Equation', 'linearEq()');
    //declireing results main object
    let result = {};
    let x = (((c1 * b2) - (c2 * b1)) / ((a1 * b2) - (b1 * a2)));
    let y = (((c1 * a2) - (c2 * a1)) / ((b1 * a2) - (a1 * b2)));
    if (x && y) {
      result = { x, y };
      return result;
    } else {
      return 'no solve found';
    }
  } else {
    if (!fstEq) {
      error('an array contains [a,b,c] 3 numeric values', 'first_Equation', 'linear()');
    } else {
      error('an array contains [a,b,c] 3 numeric values', 'second_Equation', 'linear()');
    }
  }
}

//export and share
module.exports = linearEq;