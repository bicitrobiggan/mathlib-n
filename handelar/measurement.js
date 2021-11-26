/*
Title : measurement.js
Author : Maruf Hasan
Description : get together all the measurement assets and provide them to math.js
Date : 15 October, 2021
tempData : require('./../assets/measurement');
*/

//module scaffolding
let handelar = {};

//dependencies
handelar.lineWidth = require('./../assets/measurement/lineWidth.js');
handelar.tringle = require('./../assets/measurement/tringle.js');
handelar.tringleArea = require('./../assets/measurement/tringlearea.js');
handelar.tringleLines = require('./../assets/measurement/tringleline.js');
handelar.tringleAngles = require('./../assets/measurement/tringleangles.js');
handelar.tringleMid = require('./../assets/measurement/tringlemedian.js');
handelar.quad = require('./../assets/measurement/quadangle.js');
handelar.quadArea = require('./../assets/measurement/quadanglearea.js');
handelar.quadAngles = require('./../assets/measurement/quadangleangles.js');
handelar.quadLines = require('./../assets/measurement/quadanglelines.js');
handelar.quadCorners = require('./../assets/measurement/quadanglecorners.js');
handelar.multiAngelArea = require('./../assets/measurement/multianglearea.js');

//export and share
module.exports = handelar;