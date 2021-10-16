/*
Title : memory-section.js
Author : Maruf Hasan
Description : memorise data, get memoriesed data, and delete unexpected data
Date : 13 October, 2021
*/

//memorize a number
function memo(number, name, asynchronous = false, callBack) {
  let regXp = /^[0-9]/gi;
  let num = (typeof(number) === 'number' || Array.isArray(number)) ? number : NaN;
  let nam = typeof(name) === 'string' && name.trim().length > 0 && name.search(regXp) === -1 ? name : null;
  let asy = typeof(asynchronous) === 'boolean' ? asynchronous : null;
  if (num && nam && asy !== null) {
    if (asy === false) {
      return MemoVanila(num, nam, asy);
    } else {
      MemoVanila(num, nam, asy, (call) => {
        callBack(call);
      });
    }
  } else {
    if (!num) {
      error('a number', 'number', 'memo()');
    } else if (!nam) {
      error('a string', 'name', 'memo()', TypeError, 'And don\'t add any number[0-9] at the starting of the name');
    } else {
      error('a boolean value', 'asynchronous', 'memo()');
    }
  }
}

function MemoVanila(number1, name1, asynchronous1, callBack) {
  let input = {};
  let nam1 = name1;
  let num1 = number1;
  if (asynchronous1) {
    async function asyncF() {
      input[nam1] = {
        number: num1,
        date: new Date().toString(),
        asynch: asynchronous1
      }
      callBack(mainMemoVanila(input));
    }
    asyncF();
  } else {
    input[nam1] = {
      number: num1,
      date: new Date().toString(),
      asynch: asynchronous1
    }
    return mainMemoVanila(input);
  }
}

function mainMemoVanila(data) {
  if (!localStorage.getItem('mathLib_user')) {
    //create
    localStorage.setItem('mathLib_user', JSON.stringify(data));
    return 'success';
  } else {
    //update
    let dt = { ...JSON.parse(localStorage.getItem('mathLib_user')), ...data }
    localStorage.setItem('mathLib_user', JSON.stringify(dt));
    return 'success';
  }
}
//dememorize a number
function dememo(name, asynchronous = false, callBack) {
  let regXp = /^[0-9]/gi;
  let nam = typeof(name) === 'string' && name.trim().length > 0 && name.search(regXp) === -1 ? name : null;
  let asy = typeof(asynchronous) === 'boolean' ? asynchronous : null;
  if (nam && asy !== null) {
    //console.log(e);
    if (asy === true) {
      dememoVanila(nam, asy, (call) => {
        callBack(call);
      });
    } else {
      return dememoVanila(nam);
    }
  } else {
    error('a string', 'name', 'dememo()', TypeError, 'And don\'t add any number[0-9] at the starting of the name');
  }
}

function dememoVanila(name1, asynchronous1 = false, callBack) {
  if (!asynchronous1) {
    //synchronise
    if (localStorage.getItem('mathLib_user')) {
      let output = JSON.parse(localStorage.getItem('mathLib_user'));
      if (output[name1]) {
        return output[name1];
      } else {
        return 'not found';
      }
    } else {
      throw ReferenceError('Please memories some data first by using math.memo()');
    }
  } else {
    //async
    async function asyncF() {
      if (localStorage.getItem('mathLib_user')) {
        let output = JSON.parse(localStorage.getItem('mathLib_user'));
        if (output[name1]) {
          callBack(output[name1]);
        } else {
          callBack('not found');
        }
      } else {
        throw ReferenceError('Please memories some data first by using math.memo()');
      }
    }
    asyncF();
  }
}

//delete unexpected memo
function delMemo(name = 'ALL', asynchronous = false, callback) {
  let name1 = typeof(name) === 'string' ? name : null;
  let asy = typeof(asynchronous) === 'boolean' ? asynchronous : false;
  if (name1) {
    if (asy) {
      async function local(){
        if (localStorage.getItem('mathLib_user')) {
          let output = JSON.parse(localStorage.getItem('mathLib_user'));
          if (output[name1]) {
           delete output[name1]
           localStorage.setItem('mathLib_user',JSON.stringify(output));
            callBack(output);
          } else if(name1 = 'ALL') {
            output = {};
            callBack('all clear');
          } else {
            throw ReferenceError(`${name1} can't found`);
          }
        } else {
          throw ReferenceError('Please memories some data first by using math.memo()');
        }
      }
       local();
    } else {
      if (localStorage.getItem('mathLib_user')) {
        let output = JSON.parse(localStorage.getItem('mathLib_user'));
        if (output[name1]) {
          delete output[name1]
          localStorage.setItem('mathLib_user', JSON.stringify(output));
          return output;
        } else if (name1 = 'ALL') {
          output = {};
          localStorage.setItem('mathLib_user', JSON.stringify(output));
          return 'all clear';
        } else {
          throw ReferenceError(`${name1} can't found`);
        }
      } else {
        throw ReferenceError('Please memories some data first by using math.memo()');
      }
    }
  }
}

//memorize data
math.memo = memo;
//get a memorized data
math.deMemo = dememo;
//delete unexpected data
math.delMemo = delMemo;