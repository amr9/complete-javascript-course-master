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
