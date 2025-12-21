"use strict";

// Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage();
const scoreKoalas = calcAverage();

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreKoalas, scoreDolphins)

//coding Challenge #2
function calcTip(bill) {
    if (bill > 50 && bill < 300) {
        return 0.15 * bill
    }
    else {
        return 0.20 * bill
    }
}

const bills = [125, 555, 44]


const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]



