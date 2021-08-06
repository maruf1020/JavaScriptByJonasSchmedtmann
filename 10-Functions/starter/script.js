'use strict';

////////////////////////////////////////////////////////
// lecture 01
//Just intro
////////////////////////////////////////////////////////
// lecture 02
//text only. no lecture
////////////////////////////////////////////////////////
// lecture 03. Default Parameters
// const bookings = [];
// // es6
// const createBooking = function (
//   flightNum = 5,
//   PassengerNum = 2,
//   price = '10$'
// ) {
//   //es5
//   //   flightNum = flightNum || 1;
//   //   PassengerNum = PassengerNum || 10;
//   //   price = price || 20 * 10;
//   const booking = {
//     flightNum,
//     PassengerNum,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(2);
// createBooking(2, 23, 1);
// createBooking('L231', undefined, 11);
// console.log(bookings);

////////////////////////////////////////////////////////
// // lecture 04. How Passing Arguments Works Value vs. Reference
// const flight = 'BNAIR02';
// const Maruf = {
//   name: 'Maruf Billah',
//   id: 15306,
//   mail: 'marufbillah@mail.com',
//   passport: 13246545654,
// };

// const checkin = function (flightN, passenger) {
//   flightN = 'ENAIR11';
//   passenger.name = 'MD. ' + passenger.name;

//   if (passenger.passport == 13246545654) {
//     alert('Accepted');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkin(flight, Maruf);
// console.log(flight);
// console.log(Maruf.name);

// const flightN = flight;
// const passenger = Maruf;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(Maruf);
// checkin(flight, Maruf);

////////////////////////////////////////////////////////
//  lecture 05. How Passing Arguments Works Value vs. Referenc
// talking about first class function
// thet can take function as petamiter and
// return valuse as function

////////////////////////////////////////////////////////
//  lecture 06 Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function
// const transform = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`transform string: ${fn(str)}`);
//   console.log(`transformation function name: ${fn.name}`);
// };

// // transform('Maruf is my name', oneWord);
// transform('Maruf is my name', upperFirstWord);

// //JS uses callback all the time
// let a = 1;
// const hi5 = function () {
//   console.log('👋'.repeat(a));
//   a++;
// };

// document.body.addEventListener('click', hi5);

// ['maruf', 'mahady', 'Abdullah'].forEach(hi5);

////////////////////////////////////////////////////////
// //  lecture 07. Functions Returning Functions
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };
// // const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// // const greeter = greet('hey');
// // greeter('Maruf');
// // greeter('Sabbir');
// // greet('hello')('Shuvo');

// // const greeter2 = greet2('hey');
// // greeter2('Maruf');
// // greeter2('Sabbir');
// // greet2('hello')('Shuvo');

// ////////////////////////////////////////////////////////
// //  lecture 08. The call and apply Methods
// const lufthansa = {
//   airlise: 'lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   //we can use is inside or outside
//   //book:function() {}
//   // book(flightNum, name) {
//   //   console.log(
//   //     `${name} book seat on ${this.airlise} flight ${this.iataCode}${flightNum}`
//   //   );
//   //   this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   // },
// };

// // lufthansa.book(112, 'Maruf');
// // lufthansa.book(111, 'Mahady');
// // console.log(lufthansa.booking);

// const book = function (flightNum, name) {
//   console.log(
//     `${name} book seat on ${this.airlise} flight ${this.iataCode}${flightNum}`
//   );
//   this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
// };

// const euroWings = {
//   airlise: 'EuroWings',
//   iataCode: 'EW',
//   booking: [],
// };

// // const book = lufthansa.book;

// //Does ot work
// // book(23, 'Mahady billah');

// //Call method
// book.call(euroWings, 25, 'Abdullah');
// console.log(euroWings);

// book.call(lufthansa, 100, 'Bishal Ahmed');
// console.log(lufthansa);

// const swess = {
//   airlise: 'swiss Air lines',
//   iataCode: 'LX',
//   booking: [],
// };

// book.call(swess, 225, 'Shuvo');
// console.log(swess);

// //Apply method
// const flightData = [112, 'Tomal islam'];
// book.apply(swess, flightData);
// console.log(swess);

// book.call(swess, ...flightData);
// console.log(swess);

////////////////////////////////////////////////////////
//  lecture 09. The bind Method
// // book.call(euroWings, 25, 'Abdullah');

// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swess);

// bookEW(31, 'maruf billah');

// const bookew23 = book.bind(euroWings, 23);
// bookew23('maruf billah');

// lufthansa.planes = 200;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane();

// // document
// //   .querySelector('.buy')
// //   .addEventListener('click', lufthansa.buyPlane.call(lufthansa));

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// // const addTex = (rate, value) => value + value * rate;
// // console.log(addTex(0.1, 100));

// // const addVAT = addTex.bind(null, 0.1);
// // console.log(addVAT(100));
// // console.log(addVAT(20));

// const addTax = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//     return value + value * rate;
//   };
// };
// const result = addTax(0.1);

// result(100);
// console.log(result(200));

////////////////////////////////////////////////////////
//  lecture 10 Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   //ans 1.1
//   registerNewAnswer() {
//     const userInput = Number(
//       prompt(
//         `What is your favourite programming language?${'\n'}0: JavaScript${'\n'}1: Python${'\n'}2: Rust${'\n'}3: C++${'\n'}Write option number)`
//       )
//     );
//     // this.updateArray(userInput);
//     //ans 1.2
//     typeof userInput === 'number' &&
//       userInput < this.answers.length &&
//       this.answers[userInput]++;
//     this.displayResult();
//     this.displayResult('string');
//     return userInput;
//   },
//   //ans 1.2
//   //   updateArray(userData) {
//   //     // console.log(userData);

//   //     this.answers[userData]++;
//   //     // console.log(this.answers[userData]);
//   //   },
//   //ans 03
//   displayResult(type = 'array') {
//     // console.log(
//     //   `The poll results are: ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
//     // );
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll result are ${this.answers.join(', ')}`);
//     }
//     console.log();
//     // for (const x of this.answers) {
//     //   console.log(`${x}, `);
//     // }
//   },
//   //   testData1: [5, 2, 3],
//   //   testData2: [1, 5, 3, 9, 6, 1],
//   //   displayResult2() {
//   //     for (const x of this.testData1) {
//   //       console.log(`${x}, `);
//   //     }
//   //     for (const x of this.testData2) {
//   //       console.log(`${x}, `);
//   //     }
//   //   },
// };
// // const userNumber = poll.registerNewAnswer();
// //ans 2
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // ans 03
// document
//   .querySelector('.buy')
//   .addEventListener('click', poll.displayResult.bind(poll));
// // poll.displayResult();

// //Bonus
// // poll.displayResult2();
// poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

////////////////////////////////////////////////////////
// //  lecture 11. Immediately Invoked Function Expressions (IIFE)
// const runMany = (function () {
//   console.log(`It will run many times`);
// })();
// // runMany();

// // IIFE
// (function () {
//   console.log(`this will run only one time`);
//   const isPrivate = 10;
// })();

// // console.log(isPrivate);

// (() => console.log(`This will also run once`))();

// {
//   const maruf = 10;
//   let mahady = 20;
//   var abdullah = 5;
// }

// console.log(abdullah);
// // console.log(mahady);
// // console.log(maruf);

////////////////////////////////////////////////////////
// //  lecture 12. Closures

// const secureBooking = function () {
//   let passenger = 0;

//   return function () {
//     passenger++;
//     console.log(`passenger = ${passenger}`);
//   };
// };
// const book = secureBooking();

// book();
// book();
// book();

// console.dir(book);

////////////////////////////////////////////////////////
// //  lecture 12. More example with Closures

// //Example 01
// let maruf;

// const mahady = function () {
//   const abdullah = 20;
//   maruf = function () {
//     console.log(abdullah * 2);
//   };
// };

// const sabbir = function () {
//   const siam = 40;
//   maruf = function () {
//     console.log(siam * 10);
//   };
// };

// mahady();
// maruf();
// console.dir(maruf);

// sabbir();
// maruf();
// console.dir(maruf);

// //Example 02
// const nsuAdvisingStudens = function (n, wait) {
//   const groups = 10;
//   const perTeam = n / groups;

//   setTimeout(function () {
//     console.log(`all ${n} student can do their advising `);

//     console.log(
//       `there are ${groups} groups ans per group has ${perTeam} members`
//     );
//   }, wait * 1000);

//   //   setTimeout(function () {
//   //     console.log(`the boarding will start in ${wait} secounds`);
//   //   }, wait * 5000);
//   console.log(`the boarding will start in ${wait} secounds`);
// };

// nsuAdvisingStudens(100, 4);

////////////////////////////////////////////////////////
//  lecture 13. coading challenge #2
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    if (header.style.color == 'red') {
      header.style.color = 'blue';
    } else {
      header.style.color = 'red';
    }
  });
})();
