"strict-mode";
//functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Egypt", 100, "Cairo"));
console.log(describeCountry("USA", 200, "Washington"));
console.log(describeCountry("UAE", 40, "Dubai"));

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
//Function Declarations vs. Expressions
const worldPopulation = 7900;

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(3576));
console.log(percentageOfWorld1(2456));

const percentageOfWolrd2 = function (population) {
  return (population / worldPopulation) * 100;
};

console.log(percentageOfWolrd2(1441));
console.log(percentageOfWolrd2(3576));
console.log(percentageOfWolrd2(2456));

//Arrow Functions

const percentageOfWorld3 = (population) => {
  return (population / worldPopulation) * 100;
};

console.log(percentageOfWorld3(1441));
console.log(percentageOfWorld3(3576));
console.log(percentageOfWorld3(2456));

//Functions Calling Other Functions
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  ).toFixed(1)}% of the world`;
}
console.log(describePopulation("China", 1441));
//Introduction to Arrays
const populationArray = [1441, 3578, 222, 110];
console.log(populationArray.length === 4 ? true : false);
const percentageArray = [];
for (let i = 0; i < populationArray.length; i++) {
  percentageArray.push(
    Number(percentageOfWorld1(populationArray[i]).toFixed(1))
  );
}
console.log(percentageArray);
//Basic Array Operations (Methods)
const neighbours = ["Egypt", "Libya", "Sudan"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}
neighbours[neighbours.indexOf("Egypt")] = "Masr";
console.log(neighbours);

//Introduction to Objects

const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 110,
  neighbours: neighbours,
  describe: function () {
    console.log(
      `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours ? true : false;
  },
};

console.log(myCountry);

//Dot vs. Bracket Notation
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry);

//Object Methods
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

//Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

//Looping Arrays, Breaking and Continuing
const percentageArray2 = [];
for (let i = 0; i < populationArray.length; i++) {
  percentageArray2.push(percentageOfWolrd2(populationArray[i]));
}
console.log(percentageArray2);

//Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  "Spain",
  ["Norway", "Sweden", "Russia"],
];
//this is used if elements are mix beteween arrays and normal strings
// for (let i = 0; i < listOfNeighbours.length; i++) {
//   if (typeof listOfNeighbours[i] === "object") {
//     for (let j = 0; j < listOfNeighbours[i].length; j++)
//       console.log(listOfNeighbours[i][j]);
//   } else {
//     console.log(listOfNeighbours[i]);
//   }
// }

//this is used if all elements are arrays
// for (let i = 0; i < listOfNeighbours.length; i++)
//   for (let y = 0; y < listOfNeighbours[i].length; y++)
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//The while Loop
let index1 = 0;
while (index1 < listOfNeighbours.length) {
  if (typeof listOfNeighbours[index1] === "object") {
    let index2 = 0;
    while (index2 < listOfNeighbours[index1].length) {
      console.log(listOfNeighbours[index1][index2]);
      index2++;
    }
  } else {
    console.log(listOfNeighbours[index1]);
  }
  index1++;
}
