/*
Title: mathlib.js
Author: Maruf Hasan
Description: check instalation
Date: 30 April, 2022
*/

//dependencies
const packageData = require("./package.json");

//module scaffolding
let data = {
  name: packageData.name,
  title: packageData.title,
  author: packageData.author,
  license: packageData.license,
  version: packageData.version,
  date: new Date().toString(),
};

console.log(data);
