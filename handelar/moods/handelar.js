/*
Title : handelar.js
Author : Maruf Hasan
Description : handel moods and return result as they want
Date : 17 November , 2021
*/

//dependencies
const fs = require('fs');
let moods = {};
moods.sci = require('./science.js');
moods.fix = require('./fixed.js');

function main(answer) {

  let ans = typeof(answer) === 'number' && Number.isFinite(answer) ? answer : NaN;

  if (ans !== NaN) {
    let moodData = JSON.parse(fs.readFileSync(__dirname + '/mood.json', 'utf-8'));
    console.log('success 1')
    if (moodData.mood === 'normal' && moodData.status === null) {
      //normal
    } else if ((moodData.mood !== 'normal') && typeof(moodData.status) && !Number.isNaN(moodData.status)) {
      //science and fixed
      if (moodData.mood === 'science') {
        return moods.sci(8,90);
      } else if (moodData.mood === 'fixed') {
        // return moods.fix(moodData.status);
        console.log('fixed 1')
      } else {
        console.log('error 1')
      }
    } else {
      console.log('error 2')
    }
  } else {
    error('Math error', 'answer', 'main()', RangeError);
  }
}

console.log(main(56));
//console.log(moodData);

//export and share
module.exports = main;