// Coding Challenge #1
const markWeight1 = 78;
const markHeight1 = 1.69;

const johnWeight1 = 92;
const jognHeight1 = 1.95;

const markWeight2 = 95;
const markHeight2 = 1.88;

const johnWeight2 = 85;
const jognHeight2 = 1.76;


const BMIMark1 = markWeight1 / markHeight1 ** 2;

const BMIMark2 = markWeight2 / markHeight2 ** 2;

const BMIJohn1 = johnWeight1 / jognHeight1 ** 2;

const BMIJohn2 = johnWeight2 / jognHeight2 ** 2;

const markHigerBMI1 = BMIMark1 > BMIJohn1;
const markHigerBMI2 = BMIMark2 > BMIJohn2;

console.log("BMI MARK 1: ", BMIMark1);

console.log("BMI MARK 2: ", BMIMark2);

console.log("BMI JHON 1: ", BMIJohn1);

console.log("BMI JHON 2: ", BMIJohn2);

console.log("Mark has higer BMI than jhon test 1? ", markHigerBMI1);

console.log("Mark has higer BMI than jhon test 2? ", markHigerBMI2);

// Coding Challenge #2

if (BMIMark1 > BMIJohn1) {
    console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})!`);
}
else {
    console.log(`John's BMI (${BMIJohn1}) is higher than Mark's (${BMIMark1})!`);
}

// Coding Challenge #3

const dolphinScore1 = (96 + 108 + 89) / 3;
const koalaScore1 = (88 + 91 + 110) / 3;

if (dolphinScore1 > koalaScore1) {
    console.log(`Dolphin win the trophy with score ${dolphinScore1}`);
}
else if (koalaScore1 > dolphinScore1) {
    console.log(`Koala win the trophy with score ${koalaScore1}`);
}
else {
    console.log(`Both win the trophy with score Dolphin: ${dolphinScore1}  Koala: ${koalaScore1}`);
}

//coding Challenge #4

const bill = 275;

let tip = 0;
bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)










