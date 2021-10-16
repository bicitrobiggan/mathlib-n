/*
Title : others.js
Author : Maruf Hasan
Description : get together all the others assets and provide them to math.js
Date : 5 October, 2021
tempData : require('./../assets/others');
*/

//module scaffolding
let handelar = {};

//dependencies
handelar.leapYear = require('./../assets/others/leapyear.js');
handelar.prime = require('./../assets/others/prime.js');
handelar.odd = require('./../assets/others/odd.js');
handelar.sums = require('./../assets/others/sums.js');
handelar.permut = require('./../assets/others/permutation.js');
handelar.combo = require('./../assets/others/combination.js');

//export and share
module.exports = handelar;