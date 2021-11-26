/*
Title: tringleLines.js
Author: Maruf Hasan
Description: get area of a tringle by its dots
Date: 17 October , 2021 
*/

//dependencies
const error = require('./../../error.js');
//main function to export
function tringleLines(first_point = [0, 0], second_point = [0, 0], third_point = [0, 0]) {
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
    let
      line_c = lineWidth([d.x1, d.y1], [d.x2, d.y2]),
      line_a = lineWidth([d.x2, d.y2], [d.x3, d.y3]),
      line_b = lineWidth([d.x3, d.y3], [d.x1, d.y1]);
      return  {
        line_a,
        line_b,
        line_c
      };
  } else {
    if (!fspnt) {
      error('an array contains 2 numbers[x,y]', 'first_point', 'tringleLines()');
    } else if (!scpnt) {
      error('an array contains 2 numbers[x,y]', 'second_point', 'tringleLines()');
    } else {
      error('an array contains 2 numbers[x,y]', 'third_point', 'tringleLines()');
    }
  }
}

//export and share
module.exports = tringleLines;