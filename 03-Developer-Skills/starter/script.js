// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";
if (x === 23) console.log("This is correct!");

console.log("Hello World!");

// BUG
// TODO
// FIXME

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude([
  3,
  -2,
  -6,
  -1,
  "error",
  9,
  13,
  17,
  15,
  14,
  9,
  5,
]);
console.log(amplitude);
