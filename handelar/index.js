/*
Title : index.js
Author : Maruf Hasan
Description : get together all the assets and provide them to math.js
Date : 4 October, 2021
tempData : require('./../assets/');
*/

//module scaffolding
let handelar = {};

//dependencies : 

/*---important functions---*/

//@main squad : 
handelar = {
  ...require('./others.js'),
  ...require('./converters.js'),
  ...require('./measurement.js')
};

//@important squad :
handelar.age = require('./../assets/age.js');
handelar.memo = require('./../assets/memo.js');
handelar.deMemo = require('./../assets/dememo.js');
handelar.qudrt = require('./../assets/quadratic.js');
handelar.random = require('./../assets/random.js');
handelar.fact = require('./../assets/factorial.js');
handelar.linearEq = require('./../assets/linearEquation.js');
handelar.delMemo = require('./../assets/delmemo.js');
handelar.average = require('./../assets/average.js');
handelar.logx = require('./../assets/logarithm.js');

//size
handelar.length = Object.keys(handelar).length + 43 + 1;
//export and share
module.exports = handelar;