/*
Title : Summation
Author : Maruf Hasan
Description : sum of limited  Natural numbers
Date : 5 October , 2021
*/

//dependencies
const error = require('./../../error.js');

//main function to export
function sums(number, start = 0) {
  let srt = typeof(start) === 'number' ? start : NaN;
  let result = srt;
  let num = typeof(number) === 'number' ? number : NaN;
  if (num && srt !== NaN) {
    for (let i = 1; i <= num; i++) {
      result += i;
    }
  } else {
    if (!num) {
      error('a number', 'number', 'sums()');
    } else {
      error('a number', 'start', 'sums()');
    }
  }
  return result;
}

//export and share
module.exports = sums;