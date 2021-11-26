/*
Title : quadangle.js
Author : Maruf Hasan
Description : some info about the quadangle
Date : 19 October , 2021
*/

//dependencies
const error = require('./../../error.js');
const quadArea = require('./quadanglearea.js');
const quadAngles = require('./quadangleangles.js');
const quadLines = require('./quadanglelines.js');
const lineWidth = require('./lineWidth.js');
const quadCorners = require('./quadanglecorners.js');

//main function to export
function quad(first_point = [0, 0], second_point = [0, 0], third_point = [0, 0], fourth_point = [0, 0]) {
  let
    fspnt = Array.isArray(first_point) && first_point.length === 2 ? first_point : null,
    scpnt = Array.isArray(second_point) && second_point.length === 2 ? second_point : null,
    trpnt = Array.isArray(third_point) && third_point.length === 2 ? third_point : null,
    frpnt = Array.isArray(fourth_point) && fourth_point.length === 2 ? fourth_point : null;

  if (fspnt && scpnt && trpnt && frpnt) {
    let obj = {
      ...quadLines(fspnt, scpnt, trpnt, frpnt),
      ...quadAngles(fspnt, scpnt, trpnt, frpnt),
      ...quadCorners(fspnt, scpnt, trpnt, frpnt)
    };
    obj.area = quadArea(fspnt, scpnt, trpnt, frpnt);
    return obj;
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
module.exports = quad;