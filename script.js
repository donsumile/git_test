"use strict";

const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s (${mark.bmi.toFixed(2)}) is higher than John's (${john.bmi.toFixed(2)})!`);
} else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than Mark's (${john.bmi.toFixed(2)})!`);
}
// const donski = {
//     firstName: 'dons',
//     lastName: 'ski',
//     birthYear: 1996,
//     mates: new Array('kobe', 'scottie', 'bird'),    
//     hasDriversLicense: false,

//     calcAge: function (){
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },
//     calcSummary: function (){
//         this.summary = `${this.firstName}${this.lastName} is ${this.calcAge()} years old and has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
//         return this.summary
//     }    
// };

// console.log(donski.calcAge());
// console.log(donski.calcSummary());
// donski.hasDriversLicense = true;
// console.log(donski.calcSummary());
// console.log(donski.summary);
// console.log(donski);
// donski.gender = 'male';
// console.log(donski);
// console.log(`donski has ${donski.mates.length} friends, and his best friend is call ${donski.mates[0]}`);
// console.log(donski.calcAge());
// const calcTip = function(bill){
//     return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
// }

// const bills = new Array(125, 555, 44);
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1]));
// const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2])

// console.log(bills, tips, total);

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= avgKoalas * 2){
//         console.log(`The Dolphins win! (${avgDolphins} VS. ${avgKoalas}).`);
//     } else if(avgKoalas >= avgDolphins * 2){
//         console.log(`The Koalas win! (${avgKoalas} VS. ${avgDolphins}).`);
//     } else {
//         console.log(`NO WINNER!`);
//     }
// }

// let averageDolphins = calcAverage(44, 23, 71);
// let averageKoalas = calcAverage(65, 54, 49);
// console.log(`TEST DATA 1:`);
// checkWinner(averageDolphins, averageKoalas);

// averageDolphins = calcAverage(85, 54, 41);
// averageKoalas = calcAverage(23, 34, 27);
// console.log(`TEST DATA 2:`);
// checkWinner(averageDolphins, averageKoalas);

// let averageScoreDolphins = (96 + 108 + 89) / 3;
// let averageScoreKoalas = (88 + 91 + 110) / 3;

// console.log(`---TEST DATA 1---
// Dolphins average score: ${averageScoreDolphins.toFixed(2)}
// Koalas average score  : ${averageScoreKoalas.toFixed(2)}
// `);

// if(averageScoreDolphins > averageScoreKoalas){
//     console.log(`The Dolphins win!`);
// } else if(averageScoreDolphins === averageScoreKoalas) {
//     console.log(`It's a tie!`);
// } else {
//     console.log(`The Koalas win!`);
// }

// averageScoreDolphins = (97 + 112 + 101) / 3; 
// averageScoreKoalas = (109 + 95 + 123) / 3;
// console.log(`---TEST DATA BONUS 1---
// Dolphins average score: ${averageScoreDolphins.toFixed(2)}
// Koalas average score  : ${averageScoreKoalas.toFixed(2)}
// `);

// if(averageScoreDolphins > averageScoreKoalas){
//     if(averageScoreDolphins >= 100)
//     {
//         console.log(`The Dolphins win!`);
//     } else {
//         console.log(`Dolphins have higher average (${averageScoreDolphins.toFixed(2)}) but their score is below 100
//         so there is NO winner!`);
//     }
    
// } else if(averageScoreDolphins === averageScoreKoalas) {
//     console.log(`It's a tie!`);
// } else {
//     if(averageScoreDolphins >= 100)
//     {
//         console.log(`The Koalas win!`);
//     } else {
//         console.log(`Koalas have higher average (${averageScoreKoalas.toFixed(2)}) but their score is below 100
//         so there is NO winner!`);
//     }    
// }

// averageScoreDolphins = (97 + 112 + 101) / 3; 
// averageScoreKoalas = (109 + 95 + 106) / 3;
// console.log(`---TEST DATA BONUS 2---
// Dolphins average score: ${averageScoreDolphins.toFixed(2)}
// Koalas average score  : ${averageScoreKoalas.toFixed(2)}
// `);

// if(averageScoreDolphins > averageScoreKoalas){
//     if(averageScoreDolphins >= 100)
//     {
//         console.log(`The Dolphins win!`);
//     } else {
//         console.log(`Dolphins have higher average (${averageScoreDolphins.toFixed(2)}) but their score is below 100
//         so there is NO winner!`);
//     }
    
// } else if(averageScoreDolphins === averageScoreKoalas) {
//     if(averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
//         console.log(`It's a tie!`);
//     } else {
//         console.log(`Nobody is a winner! Both teams are tied and both teams have average scores less than 100!`);
//     }    
// } else {
//     if(averageScoreDolphins >= 100)
//     {
//         console.log(`The Koalas win!`);
//     } else {
//         console.log(`Koalas have higher average (${averageScoreKoalas.toFixed(2)}) but their score is below 100
//         so there is NO winner!`);
//     }    
// }
// let weightMark = 78;
// let heightMark = 1.69;
// let bmiMark = weightMark / (heightMark ** 2);
// let weightJohn = 92;
// let heightJohn = 1.95;
// let bmiJohn = weightJohn / (heightJohn ** 2);
// let markHigherBMI = bmiMark > bmiJohn;

// if(markHigherBMI){
//     console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJohn.toFixed(2)})!`);
// } else {
//     console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's (${bmiMark.toFixed(2)})!`);
// }

// weightMark = 95;
// heightMark = 1.88;
// bmiMark = weightMark / (heightMark ** 2);
// weightJohn = 85;
// heightJohn = 1.76;
// bmiJohn = weightJohn / (heightJohn ** 2);
// markHigherBMI = bmiMark > bmiJohn;

// if(markHigherBMI){
//     console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJohn.toFixed(2)})!`);
// } else {
//     console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's (${bmiMark.toFixed(2)})!`);
// }