// Assignment: value Variables
// let country = "Egypt";
// let continent = "Africa";
let population = 110000000;

// console.log("Country:", country);
// console.log("Continent:", continent);
// console.log("Population:", population);


// Assignment: data Types
let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


// Assignment: let, const and var
language = "Arabic";
const country = "Egypt";
const continent = "Africa";
// continent = "Asia";


// Assignment: Basic Operators
let halfPopulation = population / 2;
// console.log("Population halved :", halfPopulation);
// console.log("Population added 1 :", population + 1);

let finlandPopulation = 6000000;
if (finlandPopulation > population) {
    console.log("Finland has more people");
}
else {
    console.log("Egypt has more people");
}

let description = country + " is in, " + continent +
    " and its " + population + " people speak " + language;

// console.log(description);

// Assignment: Strings and Template Literals

description = `${country} is in, ${continent} and its ${population} people speak ${language}`

console.log(description)


// Assignment: Taking Decisions: if / else Statements

population = 13 * 1000000

if (population < (33 * 1000000)) {
    console.log(`${country} population is ${(33 * 1000000) - population} bellow average`)
}
else {
    console.log(`${country} population is ${population - (33 * 1000000)} above average`)
}


// Assignment: Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143



































