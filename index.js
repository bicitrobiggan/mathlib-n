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
    /*--information--*/
    this.length = handelar.length;
    //style the name
    this.mathlib = handelar.mathlib;
    this.info = handelar.info
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
    //extended sine
    this.sinx = handelar.sinx;
    //extended cosine
    this.cos = handelar.cosx;
    //extended tangent
    this.tanx = handelar.tanx;
    //cotangent
    this.cot = handelar.cot;
    //cosecant 
    this.cosec = handelar.cosec;
    //secant
    this.sec = handelar.sec;
    //age calculation
    this.age = handelar.age;
    //get factorial of a number
    this.fact = handelar.fact;
    //get summation of a number
    this.sums = handelar.sums;
    //find a log value by a custom base
    this.logx = handelar.logx;
    //find a root of a number by a custom power;
    this.rootx = handelar.rootx;
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
    //calculate tringle area by dots
    this.tringleArea = handelar.tringleArea;
    //calculate tringle lines by dots
    this.tringleLines = handelar.tringleLines;
    //calculate tringle Angles by dots
    this.tringleAngles = handelar.tringleAngles;
    //calculate quadangle's area by its dots
    this.quadArea = handelar.quadArea;
    //calculate the corners length and cross point of the corners
    this.quadCorners = handelar.quadCorners;
    //calculate the angles of a quadangle
    this.quadAngles = handelar.quadAngles;
    //calculate the side of a quad
    this.quadLines = handelar.quadLines;
    //get some information about a quad
    this.quad = handelar.quad;
    //calculate multiAngelArea by it's dots
    this.polyArea = handelar.multiAngelArea;

    /*--conversations--*/
    //Farenheit 2 Celcius
    this.fr2C = handelar.fr2C;
    //degree to radian
    this.deg2Rad = handelar.deg2Rad;
    //radian to degree
    this.rad2Deg = handelar.rad2Deg;
    //degree to decimal
    this.deg2Dcm = handelar.deg2Dcm;
    //decimal to degree
    this.dcm2Deg = handelar.dcm2Deg;
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

function __addConstantsToTheMainMathObject() {
  const fs = require('fs');
  let data = fs.readFileSync(`${__dirname}/constants.json`, 'utf8');
  let obj = { ...JSON.parse(data) };
  return obj;
}

/*--export and share--*/
const main = { ...new mathFx(), ...__addTheMathObject(), ...__addConstantsToTheMainMathObject() };
let mainArray = Object.keys(main);
for (let i = 0; i < mainArray.length; i++) {
  Object.defineProperty(main, mainArray[i], {
    enumerable: false,
    writable: true
  });
}
module.exports = main;

function mathFx() {
  return new MATH();
}