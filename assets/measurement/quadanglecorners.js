/*
Title: quadanglecorners.js
Author: Maruf Hasan
Description: get area of a quadangle by its dots
Date: 19 October , 2021 
*/

//dependencies
const error = require('./../../error.js');
const lineWidth = require('./lineWidth.js');
const linearEq = require('./../linearEquation.js');

//main function to export
function quadCorners(first_point = [0, 0], second_point = [0, 0], third_point = [0, 0], fourth_point = [0, 0]) {
  let
    fspnt = Array.isArray(first_point) && first_point.length === 2 ? first_point : null,
    scpnt = Array.isArray(second_point) && second_point.length === 2 ? second_point : null,
    trpnt = Array.isArray(third_point) && third_point.length === 2 ? third_point : null,
    frpnt = Array.isArray(fourth_point) && fourth_point.length === 2 ? fourth_point : null;

  if (fspnt && scpnt && trpnt && frpnt) {
    let
      corner_ac = lineWidth(fspnt, trpnt),
      corner_bd = lineWidth(scpnt, frpnt);
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
      x4: frpnt[0],
      y4: frpnt[1]
    };
    let f = {
      x1: d.x1,
      y1: d.y1,
      x2: d.x3,
      y2: d.y3
    };
    let s = {
      x1: d.x2,
      y1: d.y2,
      x2: d.x4,
      y2: d.y4
    }
    crossPoint = linearEq([(f.y1 - f.y2), (f.x2 - f.x1), ((f.x2 * f.y1) - (f.x1 * f.y2))], [(s.y1 - s.y2), (s.x2 - s.x1), ((s.x2 * s.y1) - (s.x1 * s.y2))]);
    return {
      corner_ac,
      corner_bd,
      crossPoint
    }
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
module.exports = quadCorners;