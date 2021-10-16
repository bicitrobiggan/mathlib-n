/*
Title : 
Author : Maruf Hasan
Description :
Date : , 2021
*/

//dependencies
const error = require('./../../error.js');
const fact = require('./../factorial.js');

//main function to export
function permut(n, r) {
  let
    _n = typeof(n) === 'number' ? n : NaN,
    _r = typeof(r) === 'number' ? r : NaN;
  if (_n && _r) {
    let result = ((fact(_n)) / fact((_n - _r)));
    return result;
  } else {
    if (_n === NaN || _n < 0) {
      error('a number', 'n', 'combo()');
    } else {
      error('a number', 'r', 'combo()');
    }
  }
}

//export and share
module.exports = permut;