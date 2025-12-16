'use strict';   // Strict Mode is a way to opt in to a restricted variant of JavaScript, 
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

logger()

function fruitProcesssor(fruit1, fruit2) {
    console.log(fruit1, fruit2)
    const juice = `juice with ${fruit1} and ${fruit2}`
    return juice
}



let z = (fruitProcesssor("apple", "orange"))
// console.log(z)

















