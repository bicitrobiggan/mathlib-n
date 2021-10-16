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

//export and share
module.exports = handelar;