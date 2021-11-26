/*
Title : 
Author : Maruf Hasan
Description :
Date : 18 November, 2021
*/

//dependencies
const error = require('./../../error.js');

//main function to export
function main(number, answer) {
  let num = typeof(number) === 'number' ? number : 1;
  let ans = typeof(answer) === 'number' ? answer : null;
  if (ans && num) {
    if (Math.abs(answer) >= 1) {
      local(ans, num, 1)
    } else {
      local(ans, num, 0)
    }
  } else {

  }
}

function local(ans, num, tru) {
  let div = 1 / 10;
  let len = ans.toString()
  if (tru) {
    for (let i = 0; i < len.length; i++) {
      div *= 10;
      if (i === len.length - 1) {
        ans = ans / div;
        fans = ans.toFixed(num)
        return `${fans}e${i}`;
      }
    }
  }
}

console.log(local(2.34, 4, true))
//export and share
module.exports = main;