/*
Title : .localhandelar.js
Author : Maruf Hasan
Description : handel all local dependensis and provide them into files.
Date : 21 December, 2021
*/

//main object to export
const main = {};

// record
main.record = require("./handelar/datahandelar.js");
// mood
main.mood = require("./handelar/moods/handelar.js");
// error
main.error = require("./error.js");

//export and share
module.exports = main;
