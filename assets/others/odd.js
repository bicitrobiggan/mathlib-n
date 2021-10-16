/*
Title : Odd
Author : Maruf Hasan
Description : cheak the number is odd or not
Date : , 2021
*/

//dependencies
const error = require('./../../error.js');

//main function to export
function odd(number) {
  if (typeof(number) === 'number') {
    if (number % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return NaN;
  }
}

//export and share
module.exports = odd;