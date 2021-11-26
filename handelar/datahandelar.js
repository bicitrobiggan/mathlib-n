/*
Title : data handelar
Author : Maruf Hasan
Description : handel user data
Date : 13 November, 2021
*/

//dependencies
const fs = require('fs') ;
const rcdPath = `${__dirname}/../.record`;
let mood = fs.readFileSync(`${__dirname}/moods/mood.json`, 'utf-8');
let answer = Math.random() * 50;
function clear() {
  fs.writeFileSync(`${rcdPath}/${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}.json`, JSON.stringify({}))
}
let currentData = {
  date: new Date().toDateString(),
  time: new Date().toTimeString(),
  answer: answer,
  mood: JSON.parse(mood)
}
let record = {};

try {
  record = JSON.parse(fs.readFileSync(`${rcdPath}/${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}.json`, 'utf-8'));
  record[new Date().toISOString()] = currentData;
  fs.writeFileSync(`${rcdPath}/${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}.json`, JSON.stringify(record));
} catch {
  fs.writeFileSync(`${rcdPath}/${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}.json`, JSON.stringify(record));
}
let allData = fs.readdirSync(`${rcdPath}`);
//clear();

for (let i = 0; i < allData.length; i++) {
  let data = JSON.parse(fs.readFileSync(`${rcdPath}/${allData[i]}`, 'utf-8'));
  console.log(data);
}
console.log(allData);