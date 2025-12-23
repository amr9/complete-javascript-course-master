"use strict"; // Strict Mode is a way to opt in to a restricted variant of JavaScript,
// thereby implicitly opting-out of "sloppy mode".

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

function logger() {
  console.log("My name is amr");
}

logger();

function fruitProcesssor(fruit1, fruit2) {
  console.log(fruit1, fruit2);
  const juice = `juice with ${fruit1} and ${fruit2}`;
  return juice;
}

let z = fruitProcesssor("apple", "orange");
// console.log(z)

const age1 = calcAge(2000);

function calcAge(birthYear) {
  return 2025 - birthYear;
}

// console.log(age1)

const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

// console.log(calcAge2(1991))

const friends = ["Michael", "Steven", "Peter"];
console.log(friends[0]);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years.length);

const amrObject = {
  firstName: "Amr",
  lastName: "Emad",
  // age: 2025 - 2000,
  birthYear: 2000,
  friends: ["Michael", "Steven", "Peter"],
};

console.log(amrObject);

console.log(amrObject.lastName);
console.log(amrObject["lastName"]);

const nameKey = "Name";
console.log(amrObject["first" + nameKey]);

// const intrestedIN = prompt(`What do you want to know about Amr? Choose between firstName, lastName, age, and friends`);

// console.log(amrObject[intrestedIN]);

// if (amrObject[intrestedIN]) {
//     console.log(amrObject[intrestedIN]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, and friends');
// }

console.log(`${amrObject.firstName} has ${amrObject.friends.length} friends,
and his best friend is called ${amrObject.friends.at(0)}`);

amrObject.calcAge = function () {
  // console.log(this);
  return (this.age = 2025 - this.birthYear);
};

console.log(amrObject.calcAge());
console.log(amrObject.age);

// console.log(amrObject['calcAge'](2000));

amrObject.getSummary = function () {
  return `${
    this.firstName
  } is a ${this.calcAge()}-year old person, and he has ${
    this.friends.length
  } friends.`;
};

console.log(amrObject.getSummary());

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
