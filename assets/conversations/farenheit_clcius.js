/*
Title : Fahrenheit to Celcius
Author : Maruf Hasan
Description :
Date : , 2021
*/

//dependencies
const error = require('./../../error.js');

//main function to export
function Farenheit_2_Celcius(farenheit) {
  let result;
  let num = typeof(farenheit) === 'number' ? farenheit : NaN;
  if (num) {
    result = (5 / 9) * (num - 32);
    return result;
  } else {
    error('a number', 'farenheit', 'fr2C()');
  }
}

//export and share
module.exports = Farenheit_2_Celcius;