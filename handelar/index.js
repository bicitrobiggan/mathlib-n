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
const fs = require('fs');

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
handelar.rootx = require('./../assets/rootx.js');
//style mathlib

let moods = JSON.parse(fs.readFileSync(`${__dirname}/moods/mood.json`,'utf-8'));

handelar.mathlib = function() {
  let mathlib = ` __  __       _   _     _     _ _\n|  \\/  | __ _| |_| |__ | |   (_) |__
| |\\/| |/ _\` | __| '_ \\| |   | | '_ \\\n| |  | | (_| | |_| | | | |___| | |_) |\n|_|  |_|\\__,_|\\__|_| |_|_____|_|_.__/\nmood : ${moods.mood},  status : ${moods.status},  record : 0`
  let i = 1;
  let st = setInterval(styleTheName, 100);

  function styleTheName() {
    let im = mathlib.substring(0, i);
    console.clear();
    console.log(im);
    if (i < mathlib.length) {
      i++;
    } else {
      i = mathlib.length - 1;
      clearInterval(st);
    }
  }
}
//size
handelar.length = Object.keys(handelar).length + Object.getOwnPropertyNames(Math).length + 2 + __addConstantsToTheMainMathObjectCount();
handelar.info = {
  mathlib_functions: Object.keys(handelar).length - 2,
  builtIn_functions: 35,
  total_functions: Object.keys(handelar).length + 34,
  mathlib_constants: __addConstantsToTheMainMathObjectCount(),
  builtIn_constants: 8,
  total_constants: __addConstantsToTheMainMathObjectCount() + 8,
  mathlib_features: Object.keys(handelar).length - 2 + __addConstantsToTheMainMathObjectCount(),
  builtIn_features: 43,
  extra_features: 3,
  total_features: Object.keys(handelar).length + Object.getOwnPropertyNames(Math).length + 1 + __addConstantsToTheMainMathObjectCount()
}
/*important function*/
function __addConstantsToTheMainMathObjectCount() {
  const fs = require('fs');
  let data = fs.readFileSync(`${__dirname}/../constants.json`, 'utf8');
  let obj = { ...JSON.parse(data) };
  return Object.keys(obj).length;
}

//export and share
module.exports = handelar;