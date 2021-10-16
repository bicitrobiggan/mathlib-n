/*
Title : average.js
Author : Maruf Hasan
Description : found a average number between 2 or more number
Date : , 2021
*/

//dependencies
const error = require('./../error.js');

//main function to export
function average(...number) {
  var
    num = [],
    sum = 0;
  let result;
  for (let i = 0; i < number.length; i++) {
    num[i] = typeof(number[i]) === 'number' ? number[i] : error('some numbers', 'number', 'average()');
    sum += num[i];
  }
  result = sum / num.length;
  return result;
}


//export and share
module.exports = average;