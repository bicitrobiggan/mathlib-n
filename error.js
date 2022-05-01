/*
Title : Error
Author : Maruf Hasan
Description : rise custom errors when users input is wrong.
Date : 5 October, 2021
*/

/*---Error function---*/
function error(type, place, name, ErrorType = TypeError, customString = "") {
  let err;
  if (typeof type === "string" && typeof place === "string") {
    err = new ErrorType(
      `There is an error in the ${place} parameter of the ${name}() function of mathlib-n. Please enter ${type} here! ${customString}.If you think that it's a bug you can report this bug here : https://github.com/bicitrobiggan/mathlib-n/issues
      `
    );
  } else {
    err = `There is an error in your input!`;
  }
  //console.error(errorData);
  throw err;
}
//export amd share
module.exports = error;
