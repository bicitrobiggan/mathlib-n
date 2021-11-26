/*
Title : degree_decimal.js
Author : Maruf Hasan
Description : convert degree into decimal and decimal into deg.
Date : 24 October , 2021
*/

//dependencies
const error = require('./../../error.js');

//main functions to export
function deg2Dcm(input = [0, 0, 0]) {
  let inp = (typeof(input) === 'string') || (Array.isArray(input)) ? input : null;
  if (inp !== null) {
    if (Array.isArray(input)) {
      if (!inp.length) {
        inp = [0, 0, 0];
      } else if (inp.length === 1) {
        inp[1] = 0;
        inp[2] = 0;
      } else if (inp.length === 2) {
        inp[2] = 0;
      } else {

      }
      return deg2DcmLocal(inp);
    } else if (typeof(input) === 'string') {
      let
        regXpDeg = /(\d(°))/gi,
        regXpMin = /\d(\')/gi,
        regXpSec = /\d(\")/gi,
        deg, min, sec, linp;
      if (regXpDeg.test(inp) && regXpMin.test(inp) && regXpSec.test(inp)) {
        deg = parseFloat(inp.substring(0, inp.search(regXpDeg) + 1));
        min = parseFloat(inp.substring(inp.search(regXpDeg) + 2, inp.search(regXpMin) + 1));
        sec = parseFloat(inp.substring(inp.search(regXpMin) + 2, inp.search(regXpSec) + 1));
        linp = [deg, min, sec];
        return deg2DcmLocal(linp);
      } else if (inp.search(regXpDeg) >= 0 && inp.search(regXpMin) >= 0 && !regXpSec.test(inp)) {
        deg = parseFloat(inp.substring(0, inp.search(regXpDeg) + 1));
        min = parseFloat(inp.substring(inp.search(regXpDeg) + 2, inp.search(regXpMin) + 1));
        linp = [deg, min, 0];
        return deg2DcmLocal(linp);
      } else if (inp.search(regXpDeg) >= 0 && inp.search(regXpMin) < 0 && !regXpSec.test(inp)) {
        deg = parseFloat(inp.substring(0, inp.search(regXpDeg) + 1));
        linp = [deg, 0, 0];
        return deg2DcmLocal(linp);
      } else {
        throw 'Enter at least a number and symbols like °,\',"'
      }
    } else {
      error('a number or a string which contains °,\' or "', 'input', 'deg2Dcm()');
    }
  } else {
    error('a number or a string which contains °,\' or "', 'input', 'deg2Dcm()');
  }
}

function dcm2Deg(number) {
  let num = typeof(number) === 'number' ? number : NaN;
  if (num !== NaN) {
    let deg, min, sec;
    deg = Math.ceil(num) - 1;
    min = Math.ceil(((num) - (deg)) * 60) - 1;
    sec = (((((num) - (deg)) * 60) - min) * 60);
   if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      deg++;
    } 
    return {
      result: [deg, min, sec],
      string: `${deg}°${min}'${sec}"`
    };
  } else {

  }
}

//local function for deg2Dcm
function deg2DcmLocal(array) {
  let data = Array.isArray(array) ? array : [0, 0, 0];
  let
    deg = data[0],
    min = data[1],
    sec = data[2];
  let result;
  result = (deg + (min / 60) + (sec / 3600));
  return result;
}

//export and share
module.exports = {
  deg2Dcm,
  dcm2Deg
};