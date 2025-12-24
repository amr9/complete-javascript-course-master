"use strict";
// challenge #1
function printForcast(arr) {
  let string = "";
  for (let index = 0; index < arr.length; index++) {
    string = string + `... ${arr[index]}C in ${index + 1} days `;
  }
  console.log(string + "...");
}

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

printForcast(test2);
