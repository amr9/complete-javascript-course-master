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
