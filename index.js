/*
Title : Math library
Author : Maruf Hasan
Date : 24 September, 2021
Version : 1.0.0
Path : storage/emulated/0/Android/data/io.spck/files/MathLibrary/Vanila/math.js
 */

//module scaffolding 
class CORE {
  constructor() {
    //this.c = Math;
    //check prime number
    this.prime = prime;
    //check odd numbers
    this.odd = odd;
    //creat random numbers
    this.rand = random;
    //get x from quadratic
    this.qudrt = quadratic;
    //cheak leap year
    this.leapYear = leapYear;
    //age calculation
    this.age = age;
    //get factorial of a number
    this.fact = fact;
    //get summation of a number
    this.sums = sums;
    //area calculation
  }
  //constructor ends
  multiply(...numbers) {
    if (numbers.length >= 1) {
      let result = 1;
      for (let i = 0; i < numbers.length; i++) {
        if (typeof(numbers[i]) === 'number') {
          result *= numbers[i];
        } else {
          error('a number', numbers[i]);
        }
      }
      return result;
    } else {
      throw `Please enter at least two numbers to multiply.`;
    }
  }
  sum(...numbers) {
    if (numbers.length >= 1) {
      let result = 0;
      for (let i = 0; i < numbers.length; i++) {
        if (typeof(numbers[i]) === 'number') {
          result += numbers[i];
        } else {
          error('a number', numbers[i]);
        }
      }
      return result;
    } else {
      throw `Please enter at least two numbers to sum.`;
    }
  }
}

/*---Error function---*/
function error(type, place, name, ErrorType = TypeError, customString = '') {
  if (typeof(type) === 'string' && typeof(place) === 'string') {
    throw new ErrorType(`There is an error in the ${place} parameter of the math.${name}. Please enter ${type} here! ${customString}`);
  } else {
    throw `There is an error in your input!`;
  }
}

/*---important functions---*/

//leapYear function
function leapYear(year) {
  let result;
  let num = typeof(year) === 'number' ? year : NaN;
  if (num % 100 === 0) {
    if (num % 400 === 0) {
      result = true;
    } else {
      result = false;
    }
  } else {
    if (num % 4 === 0) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}
//age function
function age(year, month, date, customDate = null) {
  let newDate, cstDate = customDate;
  if (customDate !== null) {
    cstDate = typeof(customDate) === 'object' && customDate.length === 3 ? customDate : error('an Array like [yyyy,mm,dd]', 'customDate', 'age()', RangeError);
  }
  if (!cstDate) {
    newDate = new Date();
  } else {
    newDate = new Date(...cstDate);
  }
  let dRes, mRes, yRes, dM, dFeb;
  let d = typeof(date) === 'number' ? date : NaN;
  let m = typeof(month) === 'number' ? month - 1 : NaN;
  let y = typeof(year) === 'number' ? year : NaN;
  if (leapYear(y)) {
    dFeb = 29;
  } else {
    dFeb = 28;
  }
  if (m === 0 || m === 2 || m === 4 || m === 6 || m === 7 || m === 9 || m === 11) {
    dM = 31;
  } else if (m === 1) {
    dM = dFeb;
  } else {
    dM = 30;
  }
  if (d && m && y) {
    //console.log(dM);
    if (m <= newDate.getMonth() && m >= 0) {
      yRes = newDate.getFullYear() - y;
      if (d <= newDate.getDate() && d >= 1) {
        mRes = newDate.getMonth() - (m);
        dRes = newDate.getDate() - d;
      } else if (d > newDate.getDate() && d <= dM) {
        mRes = newDate.getMonth() - (m + 1)
        dRes = dM + (newDate.getDate() - d);
      } else {
        error('u', 'year', 'age()', RangeError);
      }
    } else if (m > newDate.getMonth() && m <= 11) {
      yRes = newDate.getFullYear() - (y + 1);
      if (d <= newDate.getDate() && d >= 1) {
        mRes = 12 + newDate.getMonth() - m;
        dRes = newDate.getDate() - d;
      } else if (d > newDate.getDate() && d <= dM) {
        mRes = 12 + newDate.getMonth() - (m + 1);
        dRes = dM + (newDate.getDate() - d);
      } else {
        error('a valid date', 'date', 'age()', RangeError);
      }
    } else {
      error('a month\'s number[1 - 12]', 'month', 'age()', RangeError);
    }
    if (yRes < 0) {
      error('a valid year', 'year', 'age()', RangeError);
    } else {
      return { day: dRes, month: mRes, year: yRes }
    }
  } else {
    if (!d) {
      error('a number', 'date', 'age()', RangeError);
    } else if (!m) {
      error('a number', 'month', 'age()', RangeError);
    } else {
      error('a number', 'year', 'age()', RangeError)
    }
  }
}

//quadratic function : ax^2 + bx + c 
function quadratic(a, b, c) {
  let x1, x2, d;
  let aN = typeof(a) === 'number' ? a : NaN;
  let bN = typeof(b) === 'number' ? b : NaN;
  let cN = typeof(c) === 'number' ? c : NaN;
  if (aN && bN && cN) {
    d = ((bN ** 2) - (4 * aN * cN));
    if (d < 0) {
      error('some valid number', 'a,b,c', 'quadratic()')
    } else {
      x1 = ((d ** 0.5) - bN) / (2 * aN);
      x2 = (-(d ** 0.5) - bN) / (2 * aN);
      return [x1, x2];
    }
  } else {
    if (!aN) {
      error('a number', 'a', 'quadratic()');
    } else if (!bN) {
      error('a number', 'b', 'quadratic()');
    } else {
      error('a number', 'c', 'quadratic()');
    }
  }
}

//linear equation a1x + b1y = c1, a2 + b2 = c2;
function linearEq(first_Equation, second_Equation) {
  let fstEq = Array.isArray(first_Equation) && first_Equation.length === 3 ? first_Equation : undefined;
  let secEq = Array.isArray(second_Equation) && second_Equation.length === 3 ? second_Equation : undefined;
  if (fstEq && secEq) {
    //@gettin all data;
    let
      a1 = typeof(fstEq[0]) === 'number' ? fstEq[0] : error('a number', '1st value of first_Equation', 'linearEq()'),
      b1 = typeof(fstEq[1]) === 'number' ? fstEq[1] : error('a number', '2nd value of first_Equation', 'linearEq()'),
      c1 = typeof(fstEq[2]) === 'number' ? fstEq[2] : error('a number', '3rd value of first_Equation', 'linearEq()'),
      a2 = typeof(secEq[0]) === 'number' ? secEq[0] : error('a number', '1st value of second_Equation', 'linearEq()'),
      b2 = typeof(secEq[1]) === 'number' ? secEq[1] : error('a number', '2nd value of second_Equation', 'linearEq()'),
      c2 = typeof(secEq[2]) === 'number' ? secEq[2] : error('a number', '3rd value of second_Equation', 'linearEq()');
    //declireing results main object
    let result = {};
    let x = (((c1 * b2) - (c2 * b1)) / ((a1 * b2) - (b1 * a2)));
    let y = (((c1 * a2) - (c2 * a1)) / ((b1 * a2) - (a1 * b2)));
    if (x && y) {
      result = { x, y };
      return result;
    } else {
      return 'no solve found';
    }
  } else {
    if (!fstEq) {
      error('an array contains [a,b,c] 3 numeric values', 'first_Equation', 'linear()');
    } else {
      error('an array contains [a,b,c] 3 numeric values', 'second_Equation', 'linear()');
    }
  }
}

//odd numbers
function odd(number) {
  if (typeof(number) === 'number') {
    if (number % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return NaN;
  }
}
//random numbers
function random(minimum, maximum, type = null) {
  let result;
  let res;
  const max = typeof(maximum) === 'number' ? maximum : NaN;
  const min = typeof(minimum) === 'number' ? minimum : NaN;
  if (max && min) {
    res = min + (Math.random() * (max - min));
    if (type === 0) {
      result = Math.floor(res);
    } else if (type === null || type >= 12) {
      result = res;
    } else {
      result = res.toFixed(type);
    }
    return result;
  } else {
    if (min) {
      error('a number', 'maximum', 'random()');
    } else {
      error('a number', 'minimum', 'random()');
    }
  }
}
//prime numbers
function prime(number) {
  if (typeof(number) === 'number') {
    if (number === 2) {
      return true;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i !== 0) {
          return true;
        } else if (number === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } else {
    return NaN;
  }
}
//sumesion numbers
function sums(number) {
  let result = 0;
  let num = typeof(number) === 'number' ? number : NaN;
  if (num) {
    for (let i = 1; i <= num; i++) {
      result += i;
    }
  } else {
    error('a number', 'number', 'sums()');
  }
  return result;
}
//Factorial numbers
function fact(number) {
  let result = 1;
  let num = typeof(number) === 'number' && number >= 0 && Number.isInteger(number) ? number : NaN;
  if (num) {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  } else if (num === 0) {
    result = result;
  } else {
    error('a valid number', 'number', 'fact()', TypeError, 'Be sure the number is greater than 0 and an integer type number');
  }
  return result; //Bigint(result);
}

//export and share
function __addingTheMathObject() {
  let MathArray = Object.getOwnPropertyNames(Math);
  let local = {};
  for (let i = 0; i < MathArray.length; i++) {
    local[MathArray[i]] = Math[MathArray[i]];
  }
  return local;
}
let math = { ...new MATH(), ...__addingTheMathObject() };

function MATH() {
  return new CORE();
}
