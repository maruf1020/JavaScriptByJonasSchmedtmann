'use strict';
// lecture 01 . Start
// Lecture 02 . only text content
// Lecture 03 . About java script
// Lecture 04 . how java script language run
// Lecture 05 . Execution Contexts and The Call Stack
// Lecture 06 . All about scoping

//Lecture 07:

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `your ${firstName}, your age ${age} , born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 2021) {
//       var millenial = true;
//       const firstName = 'Maaaaruf'; //most piority is nearby variable or inside block variable
//       const str = `oh, mymy , ${firstName}`; //only var work outside the block
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT'; //const output = 'NEW OUTPUT' is the same
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(3, 4));  //wont work in strict mode
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Maruf';
// calcAge(1994);

//console.log(age);
//printAge();

// Lecture 08 . HOISTING
// Lecture 09 . HOISTING in PRACTICE

//Variable
// console.log(me);
// //console.log(job);
// // console.log(year);
// var me = 'Maruf';
// let job = 'teacher';
// const year = '1991';

// //Function
// console.log(addDec(2, 3));
// //console.log(addExpr(2, 3));
// //console.log(addArrow(2, 3));

// function addDec(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //Example

// if (!numPrducts) deleteDhopping();

// var numPrducts = 10;

// function deleteDhopping() {
//   console.log('all deleted');
// }

// //summary: Do not use var

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// Lecture 10 . Using of 'This' keyword
// Lecture 11 . Using of 'This' keyword in practice
// console.log(this);

// function calAge(birthYear) {
//   console.log(2031 - birthYear);
//   console.log(this);
// }

// calAge(1994);

// const calAgeArrouw = birthYear => {
//   console.log(2031 - birthYear);
//   console.log(this);
// };

// calAgeArrouw(1994);

// const maruf = {
//   year: 1994,
//   calAge: function () {
//     console.log(this);
//     console.log(2020 - this.year);
//   },
// };
// maruf.calAge();

// //method borrow
// const mahi = {
//   year: 1996,
// };

// mahi.calAge = maruf.calAge;
// mahi.calAge();
// // console.log(mahi.calAge); //copy from maruf

// // Lecture 12:
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// Lecture 13:
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const sabbir = {
//   name: 'maruf',
//   age: 30,
// };

// const friend = sabbir;
// friend.age = 27;

// console.log('Friend:', friend);
// console.log('Sabbir', sabbir);

// Lecture 14:
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// const jessicaCopy = Object.assign({}, jessica2);
let jessicaCopy = {};
jessicaCopy = jessica2;
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
