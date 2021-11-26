/*
Title: quadanglearea.js
Author: Maruf Hasan
Description: get area of a quadangle by its dots
Date: 17 October , 2021 
*/

//dependencies
const error = require('./../../error.js');

//main function to export
function quadArea(first_point = [0, 0], second_point = [0, 0], third_point = [0, 0], fourth_point = [0, 0]) {
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
    let area = Math.abs(0.5 * ((d.x1 * d.y2) - (d.x2 * d.y1) + (d.x2 * d.y3) - (d.x3 * d.y2) + (d.x3 * d.y4) - (d.x4 * d.y3) + (d.x4 * d.y1) - (d.x1 * d.y4)));
    return area;
  } else {
    if (!fspnt) {
      error('an array contains 2 numbers[x,y]', 'first_point', 'quadangleArea()');
    } else if (!scpnt) {
      error('an array contains 2 numbers[x,y]', 'second_point', 'quadangleArea()');
    } else if (!trpnt) {
      error('an array contains 2 numbers[x,y]', 'third_point', 'quadangleArea()');
    } else {
      error('an array contains 2 numbers[x,y]', 'fourth_point', 'quadangleArea()');
    }
  }
}

//export and share
module.exports = quadArea;