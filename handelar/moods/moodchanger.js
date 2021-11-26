/*
Title : moodchanger.js
Author : Maruf Hasan
Description : change the mood of calculation.
Date : 22 November , 2021
*/

//dependencies
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs');

function usrInpuTheMood() {
  readline.question(`Enter your calculation mood here. sci for science and fix for fixed mood. And if you want  normal mood then just press enter and follow the next instructions. $_ `, (mood) => {
    let name = '';
    if (mood === 'sci') {
      name = 'science'
    } else if (mood === 'fix') {
      name = 'fixed'
    } else {
      name = 'normal'
    }
    if (name !== 'normal') {
      readline.question(`Enter the status of ${name} here. 1~12  $_ `, (status) => {
        status = parseInt(status);
        fs.writeFileSync(__dirname + '/mood.json', JSON.stringify({
          mood: name,
          status
        }));
        //prefer to right mood
        console.log(`mood ${name} seted at ${status}.`);
        readline.close();
      });
    } else {
      readline.question(`Please confrim! Enter number 212 . $_ `, (status) => {
        if (status == 212) {
          status = null;
          fs.writeFileSync(__dirname + '/mood.json', JSON.stringify({
            mood: name,
            status
          }));
          console.log(`mood ${name} seted at ${status}.`);
          readline.close();
        } else {
          usrInpuTheMood();
        }
      });
    }
  });
}
usrInpuTheMood();