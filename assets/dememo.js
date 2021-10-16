/*
Title : dememo.js
Author : Maruf Hasan
Description : return data to user
Date : 4 October, 2021
*/

//dependencies
const error = require('./../error.js');

//main function to expot
function deMemo(name, asynchronous = false, callBack) {
  let regXp = /^[0-9]/gi;
  let nam = typeof(name) === 'string' && name.trim().length > 0 && name.search(regXp) === -1 ? name : null;
  let asy = typeof(asynchronous) === 'boolean' ? asynchronous : null;
  if (nam && asy !== null) {
    //nodeJs
    if (asy === true) {
      return deMemoNode(nam, asy, (call) => {
        callBack(call);
      });
    } else {
      return deMemoNode(nam, asy);
    }
  } else {
    error('a string', 'name', 'deMemo()', TypeError, 'And don\'t add any number[0-9] at the starting of the name');
  }
}

function deMemoNode(name1, asynchronous1 = false, callBack) {
  const fs = require('fs');
  if (!asynchronous1) {
    try {
      let data = fs.readFileSync(`${__dirname}/../.mathLib/user.json`, 'utf8');
      let output = JSON.parse(data);
      let keyArr = Object.keys(output);
      if (keyArr.indexOf(name1) >= 0) {
        return output[name1];
      } else {
        return `not found`;
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    fs.readFile(`${__dirname}/../.mathLib/user.json`, 'utf8', (error1, data) => {
      if (!error1 && data) {
        let output = JSON.parse(data);
        let keyArr = Object.keys(output);
        if (keyArr.indexOf(name1) >= 0) {
          callBack(output[name1]);
        } else {
          callBack(`not found`);
        }
      } else {
        callBack(error1);
      }
    });
  }
}
//export and share
module.exports = deMemo;