/*
Title : converterCaller.js
Author : Maruf Hasan
Description : call the correct converter to convert the string.
Date : 14 October , 2021
*/

//dependencies
const error = require('./../../error.js');
const converters = require('./simple.js')

//main function to export
function caller(string) {
  let string1 = typeof(string) === 'string' && string.trim().length > 0 ? string : error('a string', 'string', 'caller()');
  let
    inch = /(\dinch)$/gi,
    cm = /\d(cm)$/gi,
    m = /\d(m)$/gi,
    km = /\d(km)$/gi,
    mile = /\d(mile)$/gi,
    ft = /\d(ft)$/gi,
    num;

  if (string1.search(inch) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(inch) + 1));
    return converters.in2Cm(num);
  } else if (string1.search(cm) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(cm) + 1));
    return converters.cm2In(num);
  } else if (string1.search(km) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(km) + 1));
    return converters.km2Mile(num);
  } else if (string1.search(mile) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(mile) + 1));
    return converters.mile2Km(num);
  } else if (string1.search(m) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(m) + 1));
    return converters.m2Ft(num);
  } else if (string1.search(ft) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(ft) + 1));
    return converters.ft2M(num);
  } else {
    if (string1.search(ft) <= 0 || string1.search(m) <= 0 || string1.search(km) <= 0 || string1.search(cm) <= 0 || string1.search(mile) <= 0 || string1.search(inch) <= 0) {
      error('a number before the unit', 'string', 'caller()', RangeError);
    } else {
      throw ReferenceError(`Enter a valid and accessable unit. List of accessable units are :
      1. m (meter)
      2. ft (Feet)
      3. km (kilometer)
      4. mile (mile)
      5. inch (inch)
      6. cm (centimeter)`);
    }
  }
}

//export and share
module.exports = caller;