//lecture 1
//just intro duction 


// //lecture 2
// // we should use 'use strict';  in the begining for finding error more easily
// //as like if we declare const interface = 'audio' this 'interface' ward is declear is reserve for future devlopment. same ase 'private' keyword, also 'if' keyword. 
// //on the other side its find the not declear word also
// //example
// 'use strict';
// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicenses = true;
// if (hasDriverLicense) console.log('I can drive');

// const interface = 'audio'
// const private = '2410'
// const if = 'maruf'



// //lecture 3
// function consoleOut() {
//     console.log(`my name is maruf`);
// }

// consoleOut();
// consoleOut();
// consoleOut();

// function myFruites(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples ans ${oranges} oranges.`
//     return juice;
// }

// const juiceNumberOne = myFruites(5, 4);
// console.log(juiceNumberOne);
// console.log(myFruites(5, 4));

// const juiceNumberTwo = myFruites(1, 1);
// console.log(juiceNumberTwo);

// //pre buillding function
// const mynumber = Number('23');
// console.log(mynumber);





// //lecture 4

// // Function declaration
// function calculateAge(currentyear, birthYear) {
//     return currentyear - birthYear;
// }
// const marufAge = calculateAge(2021, 1994);
// console.log(marufAge);
// // In function declaration can access the data before initialization



// //function expression
// // annonimus function
// const mahiAge = function (currentAnotheryear, anotherBirthYear) {
//     return currentAnotheryear - anotherBirthYear;
// }
// const myMahisAge = mahiAge(2021, 1996);
// console.log(myMahisAge);
// // In function expression we cannot access the data before initialization




// //lecture 5

// const calculateage = birthyear => 2021 - birthyear;
// const marufAge = calculateage(1994);
// console.log(calculateage(1994));

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2021 - birthyear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1994, "Maruf"))
// console.log(yearsUntilRetirement(1996, "Mahi"))







// //lecture 6

// function cutFruitpieces(fruit) {
//     return fruit * 4;
// }

// function myFruites(apples, oranges) {
//     const applePieces = cutFruitpieces(apples);
//     const orangePieces = cutFruitpieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} piece of apples ans ${orangePieces} piece of oranges.`
//     return juice;
// }

// console.log(myFruites(5, 4));




// //lecture 7
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;
//     //return `${firstName} retires in ${retirement} years`;

//     if (retirement > 0) {
//         console.log(`${retirement}`)
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         console.log(`Expired`)
//         return `${firstName} is already retired`;
//         return -1;
//     }
// }

// retirementLog = yearsUntilRetirement(1910, 'Maruf');
// console.log(retirementLog);



// //lecture 8  Coading challange #1
// const calcAverage = (data1, data2, data3) => {
//     const result = (data1 + data2 + data3) / 3
//     return result;
// }


// //test 1
// // const avgDolphines = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// //test 2
// const avgDolphines = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(data1, name1, data2, name2) {
//     if (data1 >= (data2 * 2)) {
//         return `${name1} winner with ${data1} points`;
//     } else if (data2 >= (data1 * 2)) {
//         return `${name2} winner with ${data2} points`;
//     } else {
//         return `neither ${name1} nor ${name2} is winner`;
//     };
// }

// console.log(checkWinner(avgDolphines, 'Dolphine', avgKoalas, 'Koalas'));


// //lecture 9
// let friends = ['sabbir', 'Shuvo', 'siam'];
// console.log(friends);

// const years = new Array(2010, 2014, 2016, 2021);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends - 1]);

// friends[2] = 'Shuvooo';
// console.log(friends);

// friends[4] = 'ekush';
// console.log(friends);

// const maruf = ['Maruf', 'Billah', 2121 - 1994, 'Student', friends];
// console.log(maruf);

// //Excersie
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// console.log(calcAge(years[0]));

// const ages = [calcAge(years[years.length - 1]), calcAge(years[years.length - 2]), calcAge(years[years.length - 3])]

// console.log(ages);




// //lecture 10
// let friends = ['sabbir', 'Shuvo', 'siam'];

// //Add elements
// friends.push('Ekush');
// console.log(friends);

// const newLength = friends.push('Hridoy');
// console.log(newLength);

// friends.unshift('Bishal');
// console.log(friends);


// // Remove element
// friends.pop();
// console.log(friends);

// const poped = friends.pop();
// console.log(poped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('sabbir'));  //case sensitive
// console.log(friends.indexOf('maruf'));

// friends.push(23);
// console.log(friends.includes('sabbir'));
// console.log(friends.includes('maruf'));
// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// const oneOfMyFriend = 'sabbir';

// if (friends.includes(oneOfMyFriend)) {
//     console.log(`you have a friend call ${oneOfMyFriend}`);
// }




// //lecture 11  coading challange #2

// function calcTip(bill) {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.20;
//     }
//     return tip;
// }

// const bills = new Array(125, 555, 44);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// //console.log(tips);

// // const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);




// //lecture 12
// const marufArray = [
//     'Maruf',
//     'Billah',
//     2121 - 1994,
//     'Student',
//     ['Sabbir', 'shuvo', 'siam']
// ];


// //object or property 
// //pbject litaral
// const maruf = {
//     firstName: 'Maruf',
//     lastname: 'Billah',
//     age: 2021 - 1994,
//     job: 'Student',
//     friends: ['Sabbir', 'shuvo', 'siam']
// };





// //lecture 13
// const maruf = {
//     firstName: 'Maruf',
//     lastName: 'Billah',
//     age: 2021 - 1994,
//     job: 'Student',
//     friends: ['Sabbir', 'shuvo', 'siam']
// };
// console.log(maruf);
// console.log(maruf.lastName);
// console.log(maruf['lastName']);

// const namekey = 'Name'
// console.log(maruf['first' + namekey]);
// console.log(maruf['last' + namekey]);

// //console.log(maruf.'first' + namekey);  //not work

// const interestedIn = prompt('What do you want to know about me?');
// console.log(interestedIn);
// console.log(maruf.interestedIn);  //not work
// console.log(maruf[interestedIn])

// if (maruf[interestedIn]) {
//     console.log(maruf[interestedIn]);
// } else {
//     console.log(`wrong entry`);
// }

// maruf.location = 'Bangladesh';
// maruf['facebook'] = 'www.facebook.com/tomardada';
// console.log(maruf)

// //Challenge

// console.log(`${maruf.firstName} ${maruf.lastName} has ${maruf.friends.length} friends, and the best friend name is called ${maruf.friends[0]}`);

// console.log(`${maruf.firstName} ${maruf.lastName} has ${maruf.friends['length']} friends, and the best friend name is called ${maruf.friends[0]}`);




// //lecture 14
// const maruf = {
//     firstName: 'Maruf',
//     lastName: 'Billah',
//     birthYear: 1994,
//     job: 'Student',
//     friends: ['Sabbir', 'shuvo', 'siam'],
//     hasDrivingLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2021 - birthYear;
//     // }

//     // calcAge: function () {
//     //     console.log(this)
//     //     //console.log(maruf)   //will work but not a good idea
//     //     return 2021 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is ${this.age} old ${this.job}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license.`

//         // console.log(`${this.firstName} is ${this.age} old ${this.job}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license.`)
//         // return 0;

//     }
// };

// // console.log(maruf.calcAge(1994));
// // console.log(maruf['calcAge'](1994));

// console.log(maruf.calcAge());  //must need to call it before

// console.log(maruf.age)

// //challange
// console.log(maruf.getSummary())




// //lecture 15 coading challange
// const shuvo = {
//     fullName: 'Intekharul Alam Shuvo',
//     mass: 78,
//     height: 1.69,
//     bmi: 0,

//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height ** 2));
//         return this.bmi;
//     }
// };

// const siam = {
//     fullName: 'Barkatullah Hoassain Siam',
//     mass: 92,
//     height: 1.95,
//     bmi: 0,

//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height ** 2));
//         return this.bmi;
//     }
// };


// console.log(shuvo.calcBMI(), siam.calcBMI());

// console.log(`${shuvo.fullName}'s BMI (${shuvo.calcBMI()}) is ${shuvo.bmi > siam.bmi ? 'higher' : 'lower'} than ${siam.fullName}'s (${siam.calcBMI()})`);



// //lecture 16
// // console.log('Lifting weight repitition 1 😈');
// for (let i = 1; i <= 10; i = i + 2) {
//     console.log(`Lifting weight repitition ${i} 😈`);
// }





// //lecture 17
// const marufArray = [
//     'maruf',
//     'Billah',
//     2021 - 1994,
//     'Student',
//     ['Sabbir', 'Shuvo', 'Siam']
// ];

// const types = [];

// for (let i = 0; i < marufArray.length; i++) {
//     console.log(marufArray[i], typeof marufArray[i]);

//     //types[i] = typeof marufArray[i];

//     //console.log(types[i]);

//     types.push(typeof marufArray[i]);

// }

// console.log(types);

// const years = [1994, 1996, 1998, 2000, 2002, 2004]
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages[i] = (2021 - years[i])
// }
// console.log(ages);

// //continue and break
// console.log('--------ONLY STRING--------');
// for (let i = 0; i < marufArray.length; i++) {
//     if (typeof marufArray[i] !== 'string') continue;
//     console.log(marufArray[i], typeof marufArray[i]);
// }

// console.log('--------BREAK WITH NUMBER--------');
// for (let i = 0; i < marufArray.length; i++) {
//     if (typeof marufArray[i] === 'number') break;
//     console.log(marufArray[i], typeof marufArray[i]); //wrong result
// }



// //lecture 18
// const maruf = [
//     'maruf',
//     'Billah',
//     2021 - 1994,
//     'Student',
//     ['Sabbir', 'Shuvo', 'Siam'],
//     true
// ];

// for (let i = maruf.length - 1; i >= 0; i--) {
//     console.log(i, maruf[i]);
// }


// for (let i = 1; i <= 3; i++) {
//     console.log(`---------Starting excersise ${i}`);
//     for (let j = 1; j <= 5; j++) {
//         console.log(`Excersise ${i}:  Lifting weight repetation ${j} 💪`);
//     }
// }



// //lecture 19
// // for (let i = 1; i <= 10; i++) {
// //     console.log(`FOR: Lifting weight repitition ${i} 😈`);
// // }

// let j = 1;
// while (j <= 10) {
//     // console.log(`WHILE: Lifting weight repitition ${j} 😈`);
//     j++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)


// // no counter need for while
// // while (dice !== 6) {
// //     console.log(`You rolled a ${dice}`);
// //     dice = Math.trunc(Math.random() * 6) + 1;
// //     if (dice === 6) console.log('The loop is about to end...')
// // }

// let k = 1;
// while (dice !== 6 && k <= 3) {  //use of double condition
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('The loop is about to end...')
//     k++
// }




//lecture 20 coading challange #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = [];
let total = [];


function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
}

// let sum = 0;
// function caleAverage(bill) {
//     //sum = sum + bill;
//     sum += bill;
// }

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push((calcTip(bills[i])) + bills[i]);

    // console.log(`${i + 1}: Bills=${bills[i]}, Tips=${tips[i]}, Total=${total[i]}`);

    // caleAverage(bills[i]);
}

console.log(bills, tips, total);
// console.log(sum / bills.length);

let average = 0;
function caleAnotherAverage(bill) {
    //sum = sum + bill;
    for (let i = 0; i < bill.length; i++) {
        average += bill[i];
    }
    average = average / bill.length;
    return average;
}

console.log(caleAnotherAverage(bills));
console.log(caleAnotherAverage(tips));
console.log(caleAnotherAverage(total));