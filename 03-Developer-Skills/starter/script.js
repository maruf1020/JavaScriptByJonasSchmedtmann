// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//lecrure 1. Pathways and Section Roadmaps
//just intro

//Lecture 2 is not available
//lecture 2 is just text. i wanna lean everythig

// //lecrure 3. Setting up Prettier and VS Code
// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2021 - birthYear;

// VIDEO FIXME BUG LEC TODO //for  change go to the getting and top of the right corner open the jeson file

// //lecrure 4. Installing Node.js and Setting Up a Dev Environment
// console.log(calcAge(1994));

//lecrure 5. Learning How to Code
//motivation and scearcity

//lecrure 6. How to Think Like a Developer Become a Problem Solver!
//the video learn us how to solve the problem

// //lecrure 7. Using Google, StackOverflow and MDN
// // //Problem 1:
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 19, 15, 14, 9, 5];

// // const calcTempAmplitude = function (temps) {
// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temp[i];
// //     if (typeof curTemp !== 'number') continue;
// //     if (temps[i] > max) {
// //       max = temps[i];
// //     }
// //     if (temps[i] < min) {
// //       min = temps[i];
// //     }
// //   }
// //   console.log(max);
// //   console.log(min);

// //   return max - min;
// // };
// // console.log(calcTempAmplitude(temperatures));

// //Problem 2:
// //Problem 1:
// const temperatures2 = [3, -2, -7, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude2 = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max);
//   console.log(min);

//   return max - min;
// };
// console.log(calcTempAmplitude2(temperatures, temperatures2));

//lecrure 8. Debugging (Fixing Errors)
//what is the bug and how to solve instanceof. but it not show on this video

// //lecrure 9. Debugging with the Console and Breakpoints
// const mesureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // c) fIXCING the BUG
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement);
//   // B) Find the BUG
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(mesureKelvin());

// // Using a dibugger
// const calcTempAmplitudebug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     //debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudebug = calcTempAmplitudebug([3, 5, 1], [9, 4, 5]);
// //IDENTIFIY
// console.log(amplitudebug);

//lecrure 10. Coding Challenge #1
///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understand the problem
// - How many days?
// - convert array to string

// 2) Breaking Uup into sub-problem
// - transform to string
// - transform each data to string
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  //if (arr.length !== 0) continue;
  let data = '';

  for (let i = 0; i < arr.length; i++) {
    data = data + `... ${arr[i]}ºC in ${i + 1} days `;
  }
  data = data + '...';
  console.log(data);
}

printForecast(data2);
