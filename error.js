/*
Title : Error
Author : Maruf Hasan
Description : rise custom errors when users input is wrong.
Date : 5 October, 2021
*/

/*---Error function---*/
function error(type, place, name, ErrorType = TypeError, customString = '') {
  if (typeof(type) === 'string' && typeof(place) === 'string') {
    throw new ErrorType(`There is an error in the ${place} parameter of the math.${name}. Please enter ${type} here! ${customString}`);
  } else {
    throw `There is an error in your input!`;
  }
}
//export amd share
module.exports = error;