"use strict";

// // Coding Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage();
// const scoreKoalas = calcAverage();

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins > avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if (avgKoalas > avgDolphins) {
//         console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else {
//         console.log(`No team wins...`);
//     }
// }

// checkWinner(scoreKoalas, scoreDolphins)

// //coding Challenge #2
// function calcTip(bill) {
//     if (bill > 50 && bill < 300) {
//         return 0.15 * bill
//     }
//     else {
//         return 0.20 * bill
//     }
// }

// const bills = [125, 555, 44]


// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// //coding Challenge #3

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// }
// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// }
// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higer than ${mark.fullName}'s (${mark.bmi})!`)
// }
// else if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higer than ${john.fullName}'s (${john.bmi})!`)
// }


//coding Challenge #4
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []
const totals = []
let index = 0

while (index < 10) {
    tips.push(calcTip(bills[index]))
    totals.push(tips[index] + bills[index])
    index++
}
console.log(tips + "  " + totals)

function calcAverage(arr) {
    let sum = 0
    let index = 0
    while (arr) {
        sum += arr[index]
        index++
    }
    return sum / arr.length
}

const averageTotals = calcAverage(totals)
console.log(averageTotals)
