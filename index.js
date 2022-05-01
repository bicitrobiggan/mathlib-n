/*
Title : Mathlib
Author : Maruf Hasan
Description : mathlib is an laibrary of math where we can find our day to day life's almost all small and frequently used maths solvance whice are mostly make hard our programming knowledge.
Date : 24 September, 2021
Version : 1.0.0
 */

//dependencies
const handelar = require("./handelar/index.js");

//module scaffolding
class MATH {
  constructor() {
    /*--information--*/
    this.length = handelar.length;
    //extras
    this.delRecord = handelar.delRecord;
    this.recList = handelar.list;
    this.restore = handelar.restore;
    this.read = handelar.read;
    this.mathlib = handelar.mathlib;
    this.info = handelar.info;
    /*--important functions--*/
    //check prime number done!
    this.prime = handelar.prime;
    //check odd numbers
    this.odd = handelar.odd;
    //creat random numbers
    this.rand = handelar.random;
    //get value of x from quadratic function
    this.qudrt = handelar.qudrt;
    //get average numbers done!
    this.average = handelar.average;
    //cheak leap year
    this.leapYear = handelar.leapYear;
    //extended sine
    this.sinx = handelar.sinx;
    //extended cosine done!
    this.cosx = handelar.cosx;
    //extended tangent
    this.tanx = handelar.tanx;
    //cotangent done!
    this.cot = handelar.cot;
    //cosecant done!
    this.cosec = handelar.cosec;
    //secant
    this.sec = handelar.sec;
    //age calculation done!
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
    // delete memory
    this.delMemo = handelar.delMemo;
    //solve linear equations
    this.linearEq = handelar.linearEq;
    //get a permutation of a number done!
    this.permut = handelar.permut;
    //get the complementary combination done!
    this.combo = handelar.combo;
    //get Greatest common divisor between two or more numbers
    this.GCD = handelar.GCD;
    //get Least Common Multiple between two or more numbers
    this.LCM = handelar.LCM;
    // intersection between 2 sets
    this.intersect = handelar.intersect;
    // union of 2 sets
    this.union = handelar.union;

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
    //calculate tringle medians by dots
    this.tringleMed = handelar.tringleMed;
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
    //calculate multiAngelArea by it's dots done!
    this.polyArea = handelar.polyArea;

    /*--conversations--*/
    //Farenheit 2 Celcius
    this.fr2C = handelar.fr2C;
    //Celcius 2 Farenheit done!
    this.c2Fr = handelar.c2Fr;
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
    //@centimeter to inch done!
    this.cm2In = handelar.cm2In;
    //@mile to kilometer
    this.mile2Km = handelar.mile2Km;
    //@kilometer to mile
    this.km2Mile = handelar.km2Mile;
    //@can call any simple conversation
    this.caller = handelar.caller;

    // fractional math
    this.fract = handelar.fract;
    this.sum = (...numbers) => {
      if (numbers.length > 1) {
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
          if (typeof numbers[i] === "number") {
            result += numbers[i];
          } else {
            handelar.error("a number", numbers[i]);
          }
        }
        return result;
      } else {
        throw `Please enter at least two numbers to sum.`;
      }
    };
    this.multiply = (...numbers) => {
      if (numbers.length > 1) {
        let result = 1;
        for (let i = 0; i < numbers.length; i++) {
          if (typeof numbers[i] === "number") {
            result *= numbers[i];
          } else {
            handelar.error("a number", numbers[i]);
          }
        }
        return result;
      } else {
        throw `Please enter at least two numbers to multiply.`;
      }
    };
  }
  //constructor ends
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
require("./handelar/trush")();
function __addConstantsToTheMainMathObject() {
  const fs = require("fs");
  let data = fs.readFileSync(`${__dirname}/constants.json`, "utf8");
  let obj = { ...JSON.parse(data) };
  return obj;
}

/*--export and share--*/
const main = {
  ...new mathFx(),
  ...__addTheMathObject(),
  ...__addConstantsToTheMainMathObject(),
};
let mainArray = Object.keys(main);
for (let i = 0; i < mainArray.length; i++) {
  Object.defineProperty(main, mainArray[i], {
    enumerable: false,
    writable: true,
  });
}
module.exports = main;

function mathFx() {
  return new MATH();
}
