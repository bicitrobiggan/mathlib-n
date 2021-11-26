/*
Title: tringleArea.js
Author: Maruf Hasan
Description: get area of a tringle by its dots
Date: 17 October , 2021 
*/

//dependencies
const error = require('./../../error.js');
//main function to export
function tringleArea(first_point = [0, 0], second_point = [0, 0], third_point = [0, 0]) {
  let
    fspnt = Array.isArray(first_point) && first_point.length === 2 ? first_point : null,
    scpnt = Array.isArray(second_point) && second_point.length === 2 ? second_point : null,
    trpnt = Array.isArray(third_point) && third_point.length === 2 ? third_point : null;
  if (fspnt && scpnt && trpnt) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1]
    }
    let area = Math.abs(0.5 * ((d.x1 * (d.y2 - d.y3)) + (d.x2 * (d.y3 - d.y1)) + (d.x3 * (d.y1 - d.y2))));
    return area;
  } else {
    if (!fspnt) {
      error('an array contains 2 numbers[x,y]', 'first_point', 'tringleArea()');
    } else if (!scpnt) {
      error('an array contains 2 numbers[x,y]', 'second_point', 'tringleArea()');
    } else {
      error('an array contains 2 numbers[x,y]', 'third_point', 'tringleArea()');
    }
  }
}

//export and share
module.exports = tringleArea;