/*
Title : Quadratic
Author : Maruf Hasan
Description : solving the  quadratic function ( ax^2 + bx + c )
Date : 4 October, 2021
*/

//dependencies
const error = require('./../error.js');

//main function to export
function qudrt(a, b, c) {
  let x1, x2, d;
  let aN = typeof(a) === 'number' ? a : NaN;
  let bN = typeof(b) === 'number' ? b : NaN;
  let cN = typeof(c) === 'number' ? c : NaN;
  if (aN && bN && cN) {
    d = ((bN ** 2) - (4 * aN * cN));
    if (d < 0) {
      error('some valid number', 'a,b,c', 'quadratic()')
    } else {
      x1 = ((d ** 0.5) - bN) / (2 * aN);
      x2 = (-(d ** 0.5) - bN) / (2 * aN);
      return [x1, x2];
    }
  } else {
    if (!aN) {
      error('a number', 'a', 'quadratic()');
    } else if (!bN) {
      error('a number', 'b', 'quadratic()');
    } else {
      error('a number', 'c', 'quadratic()');
    }
  }
}
//export and share
module.exports = qudrt;