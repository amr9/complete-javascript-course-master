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

//challenge #2

function workHours(hoursArray) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let totalHours = 0;
  let max = 0;
  let daysWorked = 0;
  let isWeekFullTime = false;

  for (let index = 0; index < hoursArray.length; index++) {
    totalHours += hoursArray[index];

    if (max < hoursArray[index]) {
      max = hoursArray[index];
    }

    if (hoursArray[index] != 0) {
      daysWorked++;
    }

    if (totalHours >= 35) {
      isWeekFullTime = true;
    }
  }

  const averageHours = totalHours / hoursArray.length;
  console.log(
    totalHours,
    averageHours,
    days[hoursArray.indexOf(max)],
    daysWorked,
    isWeekFullTime
  );
}

workHours([7.5, 8, 6.5, 0, 8.5, 4, 0]);
