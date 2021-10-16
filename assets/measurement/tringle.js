/*
Title: tringle.js
Author: Maruf Hasan
Description: get some information about a tringle by its dots
Date: 15 October , 2021 
*/

//dependencies
const error = require('./../../error.js');
const lineWidth = require('./lineWidth.js');
const { rad2Deg } = require('./../conversations/degree_radian.js');

//main function to export
function tringle(first_point = [0, 0], second_point = [0, 0], third_point = [0, 0]) {
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
    let
      line_c = lineWidth([d.x1, d.y1], [d.x2, d.y2]),
      line_a = lineWidth([d.x2, d.y2], [d.x3, d.y3]),
      line_b = lineWidth([d.x3, d.y3], [d.x1, d.y1]),
      cntrd = [((d.x1 + d.x2 + d.x3) / 3), ((d.y1 + d.y2 + d.y3) / 3)],
      thetaA = rad2Deg(Math.asin((2 * area) / (line_c * line_b))),
      thetaB = rad2Deg(Math.asin((2 * area) / (line_c * line_a))),
      thetaC = rad2Deg(Math.asin((2 * area) / (line_a * line_b)));
    let result = {
      area,
      line_a,
      line_b,
      line_c,
      cntrd,
      thetaA,
      thetaB,
      thetaC
    }
    return result;
  } else {

  }
}

//export and share
module.exports = tringle;