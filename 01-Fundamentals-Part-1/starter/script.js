/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log("maruf");
console.log(23);


let firstName = 'maruf'

console.log(firstName);
console.log(firstName);
console.log(firstName);

//let maruf&billah = 'jm';    //not correct
//let 3years = 3;    //not correct

//veriable name and convention
let maruf_billah = 'jm';
let _function = 27;

let person = 'maruf';
let PI = 3.1416;

let myFirstJob = 'Programmer';  //this is a good practice
let myCurrentJob = 'Teacher';   //this is a good practice


let job1 = 'Programmer';   //Not good practice
let job2 = 'Teacher';     //Not good practice

console.log(myFirstJob);


let myCountry = 'Bangladesh';
let myContinental = 'Asia';
let myCountrysPopulation = '16 coror+'

console.log(myCountry);
console.log(myContinental);
console.log(myCountrysPopulation);
*/




/*
let javaaScriptIsFun = true;
console.log(javaaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'maruf');

javaaScriptIsFun = "YES!";
console.log(typeof javaaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);


year = 1991;
console.log(typeof year);

console.log(typeof null)  // is a undefine datatype but there is bug that shows this is a object.

*/



/*
let age;
age = 30;
age = 31;

const birtYear = 1994;
//birtYear = 1996;   //not possible
// cons job;    //connot decleat const empty

//No need to use var. it is a old way

var job = 'programmer';
job = 'teacher';
console.log(typeof job);
job = 21;
console.log(typeof job);


lastName = 'maruf'  //not a good practice
console.log(lastName)  //not a good practice
*/


//lecture 9
/*
const now = 2020;
const ageMaruf = now - 1994;
const agemahi = now - 1996;
console.log(ageMaruf, agemahi);

console.log(ageMaruf * 2, agemahi / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Maruf';
const lastname = 'Billah';
console.log(firstName + ' ' + lastname);


let x = 10 + 5;
x += 10; // x = x + 10
x *= 10  // x = x * 10
x++;  // X + 1
x--; // X - 1
console.log(x);

console.log(ageMaruf > agemahi);
console.log(agemahi >= 18);


const isFullAge = agemahi >= 18;
*/



//lecture 10
/*
const now = 2020;
const ageMaruf = now - 1994;
const agemahi = now - 1996;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMaruf + agemahi) / 2;
console.log(ageMaruf, agemahi, averageAge);
*/




//lecture 11
/*
// let marksHeight = 1.69;
// let marksMass = 78;

// const marksBMI = (marksMass) / (marksHeight ** 2);
// console.log(marksBMI);

// let johnHeight = 1.95;
// let johnMass = 92;

// const johnBMI = (johnMass) / (johnHeight ** 2);
// console.log(johnBMI);

// let markHigherBMI = marksBMI > johnBMI;
// console.log(markHigherBMI);


let marksHeight = 1.88;
let marksMass = 95;

const marksBMI = (marksMass) / (marksHeight ** 2);
console.log(marksBMI);

let johnHeight = 1.76;
let johnMass = 85;

const johnBMI = (johnMass) / (johnHeight ** 2);
console.log(johnBMI);

let markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI);
*/



//Lecture 12 
// const firstName = 'Maruf'
// const job = 'student'
// const birthYear = '1994'
// const year = '2021'

// const marufInfo = "I'm " + firstName + ", a " + job + " form " + (year - birthYear) + " years!";

// console.log(marufInfo);

// const newmarufInfo = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;  //template litarals
// console.log(newmarufInfo);

// const anothermarufInfo = "I'm ${firstName}, a ${year - birthYear} year old ${job}";
// console.log(anothermarufInfo);

// console.log(`just a regular string....`);

// console.log('string \n\multiple \n\lines');

// console.log(`string
// multiple
// line`);



//lecture 13


// const ageOfFati = 18;

// if (ageOfFati >= 16) {
//     console.log(`Fati can marry on the age of ${ageOfFati}`);
// }
// else if (ageOfFati >= 18) {
//     console.log(`Fati is abale to ride cat at the age of ${ageOfFati}`);
// }
// else {
//     console.log(`fati can make her own decision at the age of ${ageOfFati}`);
// }



//Lecture 14 codding challange #2


// let marksHeight = 1.88;
// let marksMass = 95;

// const marksBMI = (marksMass) / (marksHeight ** 2);
// //console.log(marksBMI);

// let johnHeight = 1.76;
// let johnMass = 85;

// const johnBMI = (johnMass) / (johnHeight ** 2);
// //console.log(johnBMI);

// if (marksBMI > johnBMI) {
//     console.log(`Mark's BMI is higher than John's!`);
// }
// else {
//     console.log(`John's BMI is higher than Mark's!`);
// }


// if (marksBMI > johnBMI) {
//     console.log(`Mark's BMI ((${marksBMI})!`);
// }
// else {
//     console.log(`John's BMI )${johnBMI}) is higher than Mark's (${marksBMI})!`);
// }


// //Lecture 15 Type Conversion and Coercion

// //type conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18, inputYear);
// console.log(inputYear + 18);

// console.log(Number("maruf"));
// console.log(typeof NaN);

// console.log(String(23), 23);


// //type coercion

// console.log('I am ' + 26 + ' years old');
// console.log('I am ' + '26' + ' years old'); //same as previous number
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '10');
// console.log('23' / '10');
// console.log('23' > '10');



// let n = '1' + 1   //11
// n = n - 1;
// console.log(n);


// // //Lecture 16 

// //5 false values: 0, '', undefined, nall, NaN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// console.log(Boolean("maruf"))
// console.log(Boolean({}))

// const money = 0;
// if (money) {
//     console.log("Use your money properly");
// } else {
//     console.log("WTF!!");
// }

// let anotherMoney
// if (anotherMoney) {
//     console.log("Use your money properly");
// } else {
//     console.log("Undefined!!");
// }


// //Lecture 17

// const age = '18';
// if (age == 18) {
//     console.log("You just became an adult :D");
// }
// if (age === 18) {
//     console.log("You just became an adult :D");
// } else console.log("this is === equal, so its a false")




// // const favourateNumber = prompt('What is your faviorate Number?');
// // console.log('So, your favourate Number is ' + favourateNumber);
// // console.log(typeof favourateNumber);

// // if (favourateNumber === 23) {
// //     console.log('23 is a anazing number');
// // } else {
// //     console.log('You are just westing your time. this is === equal');
// // }


// const favourateNumber = prompt('What is your faviorate Number?');
// console.log('So, your favourate Number is ' + favourateNumber + ' wait');
// console.log(typeof favourateNumber);

// if (Number(favourateNumber) === 23) {
//     console.log('23 is a anazing number');
// } else if (favourateNumber === 7) {
//     console.log('You are just westing your time. this is === equal');
// } else {
//     console.log("its come to last statement");
// }

// if (favourateNumber !== 23) console.log('why not 23? (number)');
// if (favourateNumber !== '23') console.log('why not 23? (string)');




//Lecture 18
// No code only theory 


// //Lecture 19

// const hasDriversLicense = false;  //A
// const hasGoodVision = true;  //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("mahi can drive car");
// } else {
//     console.log("I should drive the car");
// }

// const isTired = false;  //C
// console.log(hasDriversLicense || hasGoodVision && isTired);
// console.log(hasDriversLicense || hasGoodVision && isTired || hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision && !isTired);



//Lecture 20 code challange 2

// //Number 01

// const dolphineFirstData = 96;
// const dolphineSeecoundData = 108;
// const dolphineThirdData = 89;

// const koalasFirstData = 88;
// const koalasSeecoundData = 91;
// const koalasThirdData = 110;

// const dolphineAverageScore = (dolphineFirstData + dolphineSeecoundData + dolphineThirdData) / 3;

// const koalasAverageScore = (koalasFirstData + koalasSeecoundData + koalasThirdData) / 3;

// const dolphinewin = (dolphineAverageScore > koalasAverageScore);
// const koalaswin = (koalasAverageScore > dolphineAverageScore);

// if (dolphinewin) {
//     console.log("Team Dolphine is win");
// } else if (koalaswin) {
//     console.log("Theam Koalas is win");
// } else {
//     console.log("Draw!!")
// }



// //Number 02

// const dolphineFirstData = 97;
// const dolphineSeecoundData = 102;
// const dolphineThirdData = 101;

// const koalasFirstData = 109;
// const koalasSeecoundData = 95;
// const koalasThirdData = 123;

// const dolphineAverageScore = (dolphineFirstData + dolphineSeecoundData + dolphineThirdData) / 3;

// const koalasAverageScore = (koalasFirstData + koalasSeecoundData + koalasThirdData) / 3;

// const dolphinewin = (dolphineAverageScore > koalasAverageScore);
// const koalaswin = (koalasAverageScore > dolphineAverageScore);

// const dolphinewinWith100 = (dolphineAverageScore > 100);
// const koalaswinWith100 = (koalasAverageScore > 100);

// if (dolphinewin && dolphinewinWith100) {
//     console.log("Team Dolphine is win 🎉");
// } else if (koalaswin && koalaswinWith100) {
//     console.log("Theam Koalas is win 🎉");
// } else {
//     console.log("Draw!!")
// }


// //Number 03

// const dolphineFirstData = 97;
// const dolphineSeecoundData = 112;
// const dolphineThirdData = 101;

// const koalasFirstData = 109;
// const koalasSeecoundData = 95;
// const koalasThirdData = 106;

// const dolphineAverageScore = (dolphineFirstData + dolphineSeecoundData + dolphineThirdData) / 3;

// const koalasAverageScore = (koalasFirstData + koalasSeecoundData + koalasThirdData) / 3;
// console.log(dolphineAverageScore, koalasAverageScore)

// const dolphinewin = (dolphineAverageScore > koalasAverageScore);
// const koalaswin = (koalasAverageScore > dolphineAverageScore);

// const dolphinewinWith100 = (dolphineAverageScore > 100);
// const koalaswinWith100 = (koalasAverageScore > 100);

// const bothTeamHaveTheSameScore = (dolphineAverageScore === koalasAverageScore);

// const dolphinewinWith100OrGreater = (dolphineAverageScore >= 100);
// const koalaswinWith100OrGreater = (koalasAverageScore >= 100);


// if (dolphinewin && dolphinewinWith100) {
//     console.log("Team Dolphine is win 🎉");
// } else if (koalaswin && koalaswinWith100) {
//     console.log("Theam Koalas is win 🎉");
// } else if (dolphinewinWith100OrGreater && koalaswinWith100OrGreater) {
//     console.log("Both win the trophy!! 🎇🎆");
// } else {
//     console.log('Out of condition');
// }


//Lecture 21
// const grade = Number(prompt("Enter your NSu grade: "));
// console.log(grade)
// switch (true) { //???
//     case (grade <= 100) && (grade >= 93):
//         console.log("A (Excilent)");
//         break;
//     case (grade <= 92) && (grade >= 90):
//         console.log("A-");
//         break;
//     case (grade <= 89) && (grade >= 87):
//         console.log("B+ (Good)");
//         break;
//     case (grade <= 86) && (grade >= 83):
//         console.log("B");
//         break;
//     case (grade <= 82) && (grade >= 80):
//         console.log("B-");
//         break;
//     case (grade <= 79) && (grade >= 77):
//         console.log("c+");
//         break;
//     case (grade <= 76) && (grade >= 73):
//         console.log("C (Average)");
//         break;
//     case (grade <= 72) && (grade >= 70):
//         console.log("C-");
//         break;
//     case (grade <= 69) && (grade >= 67):
//         console.log("D+");
//         break;
//     case (grade <= 66) && (grade >= 60):
//         console.log("D");
//         break;
//     case (grade <= 59) && (grade >= 0):
//         console.log("F");
//         break;
//     default:
//         console.log("Enter a vadid input please! 🙁")
// }




// const grade = Number(prompt("Enter your NSu grade: "));
// console.log(grade)

// if (grade <= 100 && grade >= 93)
//     console.log("A (Excilent)");

// else if (grade <= 92 && grade >= 90)
//     console.log("A-");

// else if (grade <= 89 && grade >= 87)
//     console.log("B+ (Good)");

// else if (grade <= 86 && grade >= 83)
//     console.log("B");

// else if (grade <= 82 && grade >= 80)
//     console.log("B-");

// else if (grade <= 79 && grade >= 77)
//     console.log("c+");

// else if (grade <= 76 && grade >= 73)
//     console.log("C (Average)");

// else if (grade <= 72 && grade >= 70)
//     console.log("C-");

// else if (grade <= 69 && grade >= 67)
//     console.log("D+");

// else if (grade <= 66 && grade >= 60)
//     console.log("D");

// else if (grade <= 59 && grade >= 0)
//     console.log("F");
// else {
//     console.log("Enter a vadid input please! 🙁")
// }




// //Lecture 22

// //expression
// 2 + 2
// 1994
// true && false || !true


// //statement
// if (23) {
//     console.log("ok")
// }

// // // we cannot use a statement under a statement  or template literal
// // console.log(`I'm ${2020 - 1996} years old ${if (23) {
// //     console.log("ok")
// // }}`)

// const me = "maruf"
// console.log(`I'm ${2020 - 1996} years old ${me}`);



//lecture 23
// const age = 26;
// age >= 18 ? console.log("you are allowed to live together") : console.log("you can live together but secretly");


// const setAllowness = age >= 18 ? "allowed" : "not allowed";
// console.log(setAllowness);

// //we can use this type of staement in the template litaral
// console.log(`I like to drink and this is ${age >= 18 ? "allowed" : "not allowed"}`)


// //lecture 24 practice problem #4
// const bill = 40;
// const forFifteenpercent = (bill / 100) * 15
// const fortwentypercent = (bill / 100) * 20
// const tip = bill >= 50 && bill <= 300 ? forFifteenpercent : fortwentypercent

// console.log(`The Bill is ${bill}, the tip was ${tip} and the total value is ${tip + bill}`);

// // result  316.25 , 48, 516


//lecture 25
//history of java script
//we are teach es5 and es6