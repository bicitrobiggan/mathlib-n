/*
Title : quadanglelines.js
Author : Maruf Hasan
Description : measure the line's width of a quadangle
Date : 19 October , 2021
*/

//dependencies
const error = require('./../../error.js');
const lineWidth = require('./lineWidth.js');

//main function to export
function quadLines(first_point = [0, 0], second_point = [0, 0], third_point = [0, 0], fourth_point = [0, 0]) {
  let
    fspnt = Array.isArray(first_point) && first_point.length === 2 ? first_point : null,
    scpnt = Array.isArray(second_point) && second_point.length === 2 ? second_point : null,
    trpnt = Array.isArray(third_point) && third_point.length === 2 ? third_point : null,
    frpnt = Array.isArray(fourth_point) && fourth_point.length === 2 ? fourth_point : null;

  if (fspnt && scpnt && trpnt && frpnt) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
      x4: frpnt[0],
      y4: frpnt[1]
    }
    let
      line_a = lineWidth([d.x1, d.y1], [d.x2, d.y2]),
      line_b = lineWidth([d.x2, d.y2], [d.x3, d.y3]),
      line_c = lineWidth([d.x3, d.y3], [d.x4, d.y4]),
      line_d = lineWidth([d.x4, d.y4], [d.x1, d.y1]);
    return {
      line_a,
      line_b,
      line_c,
      line_d
    }
  } else {
    if (!fspnt) {
      error('an array contains 2 numbers[x,y]', 'first_point', 'quadLines()');
    } else if (!scpnt) {
      error('an array contains 2 numbers[x,y]', 'second_point', 'quadLines()');
    } else if (!trpnt) {
      error('an array contains 2 numbers[x,y]', 'third_point', 'quadLines()');
    } else {
      error('an array contains 2 numbers[x,y]', 'fourth_point', 'quadLines()');
    }
  }
}

//export and share
module.exports = quadLines;