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






















