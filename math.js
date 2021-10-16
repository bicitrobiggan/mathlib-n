/*
Title : Mathlib
Author : Maruf Hasan
Description : mathlib is an laibrary of math where we can find our day to day life's almost all small and frequently used maths solvance whice are mostly make hard our programming knowledge.
Date : 24 September, 2021
Version : 1.0.0
 */

//dependencies
const handelar = require('./handelar/index.js');

//module scaffolding 
class MATH {
  constructor() {
    /*--important functions--*/
    //check prime number
    this.prime = handelar.prime;
    //check odd numbers
    this.odd = handelar.odd;
    //creat random numbers
    this.rand = handelar.random;
    //get value of x from quadratic function
    this.qudrt = handelar.qudrt;
    //get average numbers
    this.average = handelar.average;
    //cheak leap year
    this.leapYear = handelar.leapYear;
    //age calculation
    this.age = handelar.age;
    //get factorial of a number
    this.fact = handelar.fact;
    //get summation of a number
    this.sums = handelar.sums;
    //memories a number
    this.memo = handelar.memo;
    //get a memorized data
    this.deMemo = handelar.deMemo;
    this.delMemo = handelar.delMemo;
    //solve linear equations
    this.linearEq = handelar.linearEq;
    //get a permutation of a number
    this.permut = handelar.permut;
    //get the complementary combination
    this.combo = handelar.combo;
    
    /*--measurement calculation--*/
    //find out the distance between 2 dots
    this.lineWidth = handelar.lineWidth;
    //getting som info about the tringle by its 3 dots
    this.tringle = handelar.tringle;

    /*--conversations--*/
    //Farenheit 2 Celcius
    this.fr2C = handelar.fr2C;
    //degree to radian
    this.deg2Rad = handelar.deg2Rad;
    this.rad2Deg = handelar.rad2Deg;
    //@meter to feet
    this.m2Ft = handelar.m2Ft;
    //@feet to meter
    this.ft2M = handelar.ft2M;
    //@inch to centimeter
    this.in2Cm = handelar.in2Cm;
    //@centimeter to inch
    this.cm2In = handelar.cm2In;
    //@mile to kilometer
    this.mile2Km = handelar.mile2Km;
    //@kilometer to mile
    this.km2Mile = handelar.km2Mile;
    //@can call any simple conversation
    this.caller = handelar.caller;
  }
  //constructor ends
  multiply(...numbers) {
    if (numbers.length > 1) {
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
    if (numbers.length > 1) {
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

/*--add the math object--*/
function __addTheMathObject() {
  let MathArray = Object.getOwnPropertyNames(Math);
  let local = {};
  for (let i = 0; i < MathArray.length; i++) {
    local[MathArray[i]] = Math[MathArray[i]];
  }
  return local;
}
/*--export and share--*/
module.exports = { ...new mathFx(), ...__addTheMathObject() };

function mathFx() {
  return new MATH();
}