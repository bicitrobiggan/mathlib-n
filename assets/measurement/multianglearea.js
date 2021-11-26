/*
Title : multiangelarea.js
Author : Maruf Hasan
Description : take 
Date : 19 October , 2021
*/

//dependencies
const error = require('./../../error.js');

//main function to export
function multiAngleArea(...dots) {
  let n = dots.length >= 3 ? dots : null;
  var d = {};
  var fresult, result = 0;
  for (let i = 0; i < n.length; i++) {
    if (n && Array.isArray(n[i]) && n[i].length === 2) {
      d[`x${i+1}`] = typeof(n[i][0]) === 'number' ? n[i][0] : NaN;
      d[`y${i+1}`] = typeof(n[i][1]) === 'number' ? n[i][1] : NaN;
    } else {
      if (n === null) {
        throw SyntaxError('unexpected end of input : enter at least 3 dots hare');
      } else if (!Array.isArray(n[i])) {
        error('an array contains 2 values [x,y]', `${i+1}th dot (array[x,y])`, 'multiangelarea()')
      } else {
        throw TypeError(`enter 2 values in ${i+1} no. array`);
      }
    }
  }
  for (let i = 1; i <= n.length; i++) {
    if (i < n.length) {
      result += ((d[`x${ i }`] * d[`y${ i + 1 }`]) - (d[`x${ i + 1 }`] * d[`y${ i }`]));
    } else if (i === n.length) {
      result += ((d[`x${ i }`] * d[`y${ 1 }`]) - (d[`x${ 1 }`] * d[`y${ i }`]));
    } else {

    }
  }
  fresult = Math.abs(0.5 * result);
  return fresult;
}

module.exports = multiAngleArea;