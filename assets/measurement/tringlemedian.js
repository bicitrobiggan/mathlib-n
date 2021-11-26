/*
Title: tringlemedians.js
Author: Maruf Hasan
Description: measure the medians of tringle
Date: 19 October , 2021 
*/

//dependencies
const error = require('./../../error.js');
const lineWidth = require('./lineWidth.js');

//main function to export
function tringleMid(first_point = [0, 0], second_point = [0, 0], third_point = [0, 0]) {
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
      x3 = (d.x1 + d.x2) / 2,
      y3 = (d.y1 + d.y2) / 2,
      x1 = (d.x2 + d.x3) / 2,
      y1 = (d.y2 + d.y3) / 2,
      x2 = (d.x3 + d.x1) / 2,
      y2 = (d.y3 + d.y1) / 2,
      mid_ad = lineWidth([d.x1, d.y1], [x1, y1]),
      mid_be = lineWidth([d.x2, d.y2], [x2, y2]),
      mid_cf = lineWidth([d.x3, d.y3], [x3, y3]);
      return {
        D : [x1,y1],
        E : [x2,y2],
        F : [x3,y3],
        mid_ad,
        mid_be,
        mid_cf
      }
  } else {
    if (!fspnt) {
      error('an array contains 2 numbers[x,y]', 'first_point', 'tringleMid()');
    } else if (!scpnt) {
      error('an array contains 2 numbers[x,y]', 'second_point', 'tringleMid()');
    } else {
      error('an array contains 2 numbers[x,y]', 'third_point', 'tringleMid()');
    }
  }
}

//export and share
module.exports = tringleMid;