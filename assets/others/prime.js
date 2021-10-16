/*
Title : Prime number 
Author : Maruf Hasan
Description : cheak the number is prime or not
Date : 5 October, 2021
*/

//dependencies
const error = require('./../../error.js');

//main function to export
function prime(number) {
  if (typeof(number) === 'number') {
    if (number === 2) {
      return true;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i !== 0) {
          return true;
        } else if (number === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } else {
    return NaN;
  }
}

//export and share
module.exports = prime;