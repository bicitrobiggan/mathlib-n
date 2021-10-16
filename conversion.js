/*
Title : conversion.js
Author : Maruf Hasan
Description : convert some things to other unit
Date : 13 October, 2021
*/

//convert degree to radinan
function deg2Rad(input = [0, 0, 0]) {
  if (Array.isArray(input)) {
    //array
    let
      deg = input.length && typeof(input[0]) === 'number' ? input[0] : 0,
      min = input.length >= 2 && typeof(input[1]) === 'number' ? input[1] : 0,
      sec = input.length === 3 && typeof(input[2]) === 'number' ? input[2] : 0;
    if (deg !== NaN && min !== NaN && sec !== NaN) {
      return localDeg([deg, min, sec]);
    } else {
      if (!deg) {
        error('a number', 'input', 'deg2Rad');
      } else if (!min) {
        error('a number', 'input', 'deg2Rad');
      } else {
        error('a number', 'input', 'deg2Rad');
      }
    }
  } else if (typeof(input) === 'string') {
    let regXpDeg = /(°){1}/gi,
      regXpMin = /(′|'|’|‘|`){1}/gi;
    regXpSec = /(″|"|”|“){1}/gi;
    if (input.search(regXpDeg) >= 0) {
      let
        deg = parseFloat(input.substring(0, input.search(regXpDeg))),
        min = input.search(regXpMin) >= 0 ? parseFloat(input.substring(input.search(regXpDeg) + 1, input.search(regXpMin))) : 0,
        sec = input.search(regXpSec) >= 0 ? parseFloat(input.substring(input.search(regXpMin) + 1, input.search(regXpSec))) : 0;
      return localDeg([deg, min, sec]);
    } else {

    }
  }
}

//convert radian to degree
function rad2Deg(radian) {
  let
    rad,
    result,
    deg,
    regXp = /(π$){1}/gi,
    be4deg,
    regXp2 = /(π\/){1}/gi;
  if (typeof(radian) === 'number') {
    rad = radian;
    deg = rad * (180 / Math.PI);
  } else if (typeof(radian) === 'string') {
    if (radian.search(regXp) >= 0) {
      rad = radian.substring(0, radian.search(regXp));
      be4deg = Number.isNaN(parseFloat(rad)) ? 1 : parseFloat(rad);
      let data = localRad(be4deg);
      console.log(data);
    } else if (radian.search(regXp2) >= 0 && radian.search(/^π/gi) === -1) {
      rad = Function("return " + (radian.replace(/(π){1}/gi, '')))();
      be4deg = rad % (Math.PI / 180);
      let data = localRad(be4deg);
    } else if (radian.search(regXp2) >= 0 && radian.search(/^π/gi) >= 0) {
      rad = Function(`return 1${radian.replace(/(π){1}/gi, '')}`)();
      be4deg = rad % (Math.PI / 180);
      let data = localRad(be4deg);
    } else {
      throw TypeError(`Please put a π symbol at the last of your string`);
    }
  } else {

  }
}

function localRad(be4deg) {
  let deg, min, sec;
  deg = Math.ceil(be4deg * 180) - 1;
  min = Math.ceil(((be4deg * 180) - (deg)) * 60) - 1;
  sec = (((((be4deg * 180) - (deg)) * 60) - min) * 60);
  if (sec >= 0) {
    sec = 0;
    min++;
  }
  if (min >= 0) {
    min = 0;
    deg++;
  }
  return [deg, min, sec];
}

function localDeg(array) {
  let data = Array.isArray(array) ? array : [NaN, NaN, NaN];
  let
    deg = data[0],
    min = data[1],
    sec = data[2];
  let result, radian, string;
  radian = (deg + (min / 60) + (sec / 3600)) * (Math.PI / 180);
  string = `${radian / Math.PI}π`;
  result = { radian, string };
  return result;
}

//Fahrenheit to celcius
function Farenheit_2_Celcius(farenheit) {
  let result;
  let num = typeof(farenheit) === 'number' ? farenheit : NaN;
  if (num) {
    result = (5 / 9) * (num - 32);
    return result;
  } else {
    error('a number', 'farenheit', 'fr2C()');
  }
}

//1_@inch to centimeter
function in2Cm(inch) {
  let result;
  let num = typeof(inch) === 'number' ? inch : NaN;
  result = num * 2.54;
  return result;
}

//2_@Centimeter to Inch
function cm2In(centimeter) {
  let result;
  let num = typeof(centimeter) === 'number' ? centimeter : NaN;
  result = num / 2.54;
  return result;
}

//3_@Mile to kilometer
function mile2Km(mile) {
  let result;
  let num = typeof(mile) === 'number' ? mile : NaN;
  result = num * 1.609344;
  return result;
}

//4_@kilometer to mile
function km2Mile(kilometer) {
  let result;
  let num = typeof(kilometer) === 'number' ? kilometer : NaN;
  result = num / 1.609344;
  return result;
}

//5_@feet to meter
function ft2M(feet) {
  let result;
  let num = typeof(feet) === 'number' ? feet : NaN;
  result = num * 0.3048;
  return result;
};

//6_@meter to feet
function m2Ft(meter) {
  let result;
  let num = typeof(meter) === 'number' ? meter : NaN;
  result = num / 0.3048;
  return result;
};

//@_call the right chonverter by a string
function caller(string) {
  let string1 = typeof(string) === 'string' && string.trim().length > 0 ? string : error('a string', 'string', 'caller()');
  let
    inch = /((inch){1,1})$/gi,
    cm = /((cm){1,1})$/gi,
    m = /((m){1,1})$/gi,
    km = /((km){1,1})$/gi,
    mile = /((mile){1,1})$/gi,
    ft = /((ft){1,1})$/gi,
    num;

  if (string1.search(inch) > 0) {
    num = parseFloat(string1.substring(0, string1.search(inch)));
    return in2Cm(num);
  } else if (string1.search(cm) > 0) {
    num = parseFloat(string1.substring(0, string1.search(cm)));
    return cm2In(num);
  } else if (string1.search(km) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(km)));
    return km2Mile(num);
  } else if (string1.search(mile) > 0) {
    num = parseFloat(string1.substring(0, string1.search(mile)));
    return mile2Km(num);
  } else if (string1.search(m) > 0) {
    num = parseFloat(string1.substring(0, string1.search(m)));
    return m2Ft(num);
  } else if (string1.search(ft) > 0) {
    num = parseFloat(string1.substring(0, string1.search(ft)));
    return ft2M(num);
  } else {
    if (string1.search(ft) === 0 || string1.search(m) === 0 || string1.search(km) === 0 || string1.search(cm) === 0 || string1.search(mile) === 0 || string1.search(inch) === 0) {
      error('a number before the unit', 'string', 'caller()', RangeError);
    } else {
      throw ReferenceError(`Enter a valid and accessable unit. List of accessable units are :
      1. m (meter)
      2. ft (Feet)
      3. km (kilometer)
      4. mile (mile)
      5. inch (inch)
      6. cm (centimeter)`);
    }
  }
}


/*--export and share--*/
math.deg2Rad = deg2Rad;
math.rad2Deg = rad2Deg;
math.fr2C = Farenheit_2_Celcius;
math.in2Cm = in2Cm;
math.cm2In = cm2In;
math.m2Ft = m2Ft;
math.ft2M = ft2M;
math.km2Mile = km2Mile;
math.mile2Km = mile2Km;
math.caller = caller;