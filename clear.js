/*
Title : 
Author : Maruf Hasan
Description : clear
Date : jan 10 , 2022
*/

//dependencies
const fs = require("fs");
let moods = JSON.parse(
  fs.readFileSync(`${__dirname}/handelar/moods/mood.json`, "utf-8")
);
try {
  JSON.parse(fs.readFileSync(`${__dirname}/.mathLib/user.json`, "utf-8"));
} catch {
  fs.unlinkSync(`${__dirname}/.mathLib/user.json`);
  fs.writeFileSync(`${__dirname}/.mathLib/user.json`, JSON.stringify({}));
}
let record = fs.readdirSync(__dirname + "/.record/");
let trush = fs.readdirSync(__dirname + "/.record/.trush/");
let restore = fs.readdirSync(__dirname + "/.record/.restored/");

mathlib = function () {
  let mathlib = ` __  __       _   _     _      _ _ \n|  \\/  |     | | | |   | |    (_) |\n| \\  / | __ _| |_| |__ | |     _| |__\n| |\\/| |/ _\` | __| '_ \\| |    | | '_ \\\n| |  | | (_| | |_| | | | |____| | |_) |\n|_|  |_|\\__,_|\\__|_| |_|______|_|_.__/\n\nmood : ${
    moods.mood
  },  status : ${moods.status},  record : ${record.length - 2},  trush : ${
    trush.length
  }, restored: ${restore.length}`;
  let i = 1;
  let st = setInterval(styleTheName, 100);

  function styleTheName() {
    let im = mathlib.substring(0, i);
    console.clear();
    console.log(im);
    if (i < mathlib.length) {
      i++;
    } else {
      i = mathlib.length - 1;
      clearInterval(st);
    }
  }
};

//main function to export
module.exports = mathlib;
