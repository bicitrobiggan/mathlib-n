/*
Title : 
Author : Maruf Hasan
Description :
Date : 
*/

//dependencies
const error = require('./../../error.js');

//main function to export
function leapYear(year) {
  let result;
  let num = typeof(year) === 'number' ? year : NaN;
  if (num % 100 === 0) {
    if (num % 400 === 0) {
      result = true;
    } else {
      result = false;
    }
  } else {
    if (num % 4 === 0) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}
//export amd share
module.exports = leapYear;