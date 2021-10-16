/*
Title : 
Author : Maruf Hasan
Description :
Date : 7 October , 2021
*/

//dependencies
const error = require('./../../error.js');

//main functions to export

//convert degree into radian
function deg2Rad(input = [0, 0, 0]) {
  if (Array.isArray(input)) {
    //array
    let
      deg = input.length && typeof(input[0]) === 'number' ? input[0] : 0,
      min = input.length >= 2 && typeof(input[1]) === 'number' ? input[1] : 0,
      sec = input.length === 3 && typeof(input[2]) === 'number' ? input[2] : 0;
    if (deg !== NaN && min !== NaN && sec !== NaN) {
      return localDeg([deg, min, sec]);
    } else {
      if (!deg) {
        error('a number', 'input', 'deg2Rad');
      } else if (!min) {
        error('a number', 'input', 'deg2Rad');
      } else {
        error('a number', 'input', 'deg2Rad');
      }
    }
  } else if (typeof(input) === 'string') {
    let regXpDeg = /(°){1}/gi,
      regXpMin = /(′|'|’|‘|`){1}/gi;
    regXpSec = /(″|"|”|“){1}/gi;
    if (input.search(regXpDeg) >= 0) {
      let
        deg = parseFloat(input.substring(0, input.search(regXpDeg))),
        min = input.search(regXpMin) >= 0 ? parseFloat(input.substring(input.search(regXpDeg) + 1, input.search(regXpMin))) : 0,
        sec = input.search(regXpSec) >= 0 ? parseFloat(input.substring(input.search(regXpMin) + 1, input.search(regXpSec))) : 0;
      return localDeg([deg, min, sec]);
    } else if (typeof(input) === 'number') {
      return localDeg([input,0,0]);
    } else {
      error('an Array contains 3 numbers or a string', 'input', 'deg2Rad()');
    }
  }
}

//convert radian into degree
function rad2Deg(radian) {
  let
    rad,
    result,
    deg,
    regXp = /(π$){1}/gi,
    be4deg,
    regXp2 = /(π\/){1}/gi;
  if (typeof(radian) === 'number') {
    rad = radian;
    deg = rad * (180 / Math.PI);
    return (deg);
  } else if (typeof(radian) === 'string') {
    if (radian.search(regXp) >= 0) {
      rad = radian.substring(0, radian.search(regXp));
      be4deg = Number.isNaN(parseFloat(rad)) ? 1 : parseFloat(rad);
      return localRad(be4deg);
    } else if (radian.search(regXp2) >= 0 && radian.search(/^π/gi) === -1) {
      rad = Function("return " + (radian.replace(/(π){1}/gi, '')))();
      be4deg = rad % (Math.PI / 180);
       return localRad(be4deg);
    } else if (radian.search(regXp2) >= 0 && radian.search(/^π/gi) >= 0) {
      rad = Function(`return 1${radian.replace(/(π){1}/gi, '')}`)();
      be4deg = rad % (Math.PI / 180);
      return localRad(be4deg);
    } else {
      throw TypeError(`Please put a π symbol at the last of your string`);
    }
  } else {
    error('a number or a string', 'radian', 'rad2Deg()')
  }
}

function localRad(be4deg) {
  let deg, min, sec;
  deg = Math.ceil(be4deg * 180) - 1;
  min = Math.ceil(((be4deg * 180) - (deg)) * 60) - 1;
  sec = (((((be4deg * 180) - (deg)) * 60) - min) * 60);
  if (sec >= 0) {
    sec = 0;
    min++;
  }
  if (min >= 0) {
    min = 0;
    deg++;
  }
  return [deg, min, sec];
}

function localDeg(array) {
  let data = Array.isArray(array) ? array : [NaN, NaN, NaN];
  let
    deg = data[0],
    min = data[1],
    sec = data[2];
  let result, radian, string;
  radian = (deg + (min / 60) + (sec / 3600)) * (Math.PI / 180);
  string = `${radian / Math.PI}π`;
  result = { radian, string };
  return result;
}

//export and share
module.exports = {
  deg2Rad,
  rad2Deg
}