'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Maruf Billah',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// Lecture 23. Sorting Arrays (inside the project) (edited 07)

/////////////////////////////////////////////////
// Lecture 07. Creating DOM elements
// All the list of deposit and withrow

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  //for sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <!-- <div class="movements__date">3 days ago</div>  -->
      <div class="movements__value">${mov}৳</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
// Lecture 13. The reduce Method (inside the project)
//For showing the current balance on top right corner
const currentDisplayBalance = acc => {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance} ৳`;
};

/////////////////////////////////////////////////
// Lecture 15. The Magic of Chaining Methods (inside the project)
// For showing the total in, out and interest on bottom left side
const calcDisplaysummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acu, mov) => acu + mov, 0);
  labelSumIn.textContent = `${income}৳`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acu, cur) => acu + cur, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}৳`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acu, mov) => acu + mov, 0);

  labelSumInterest.textContent = `${interest}৳`;
};

/////////////////////////////////////////////////
// // Lecture 11. Computing Usernames
// Create username for every account
const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name, i) => name[0])
      .join('');
  });
};

createUserName(accounts);

const updateUI = function (acc) {
  //Display Movement
  displayMovement(acc.movements);
  //Display Balance
  currentDisplayBalance(acc);
  //Display Summary
  calcDisplaysummary(acc);
  // console.log('login');
};
// console.log(accounts);
// console.log(accounts);

/////////////////////////////////////////////////
// Lecture 18. Implementing Login
//Login work
let currenAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('click');

  currenAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  // console.log(currenAccount);
  if (currenAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currenAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear the input fills
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currenAccount);
  }
});

/////////////////////////////////////////////////
// Lecture 19. Implementing Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiveAcc &&
    currenAccount.balance >= amount &&
    receiveAcc.userName !== currenAccount.userName
  ) {
    //transper one account to another
    currenAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    // console.log('valid');
    //Update ui
    updateUI(currenAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

/////////////////////////////////////////////////
// Lecture 21. some and every (inside the project)
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currenAccount.movements.some(mov => mov >= amount * 0.1)) {
    //got money
    currenAccount.movements.push(amount);

    //UI update
    updateUI(currenAccount);
  }
  inputLoanAmount.value = '';
});
/////////////////////////////////////////////////
// Lecture 20. The findIndex Method
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername?.value === currenAccount.userName &&
    Number(inputClosePin?.value) === currenAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currenAccount.userName
    );

    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;

    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

/////////////////////////////////////////////////
// Lecture 23. Sorting Arrays (inside the project)

let changeSort = 2;
btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  let sortTrueFalse = changeSort % 2 === 0 ? true : false;
  displayMovement(currenAccount.movements, sortTrueFalse);
  changeSort++;
});

/////////////////////////////////////////////////
// Lecture 01
// just intro
///////////////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//////////////////////////////////////////////////////////////
// Lecture 02
// theory part onlt reading

/////////////////////////////////////////////////
// // Lecture 03. Simple Array Methods
// let arr = ['m', 'a', 'r', 'u', 'f'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// // console.log(arr);
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['m', 'a', 'r', 'u', 'f'];
// const arr2 = ['m', 'a', 'h', 'a', 'd'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

/////////////////////////////////////////////////
// Lecture 04. Simple Array Methods

/////////////////////////////////////////////////
// // Lecture 04. Looping Arrays forEach

// console.log('-------for loop--------');
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you diposited ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------for with entries--------');
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`entry no ${i + 1}: you diposited ${movement}`);
//   } else {
//     console.log(`entry no ${i + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------forEach--------');
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`you diposited ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// });

// console.log('-------forEach with index--------');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`entry no ${i + 1}: you diposited ${mov}`);
//   } else {
//     console.log(`entry no ${i + 1}: you withdrew ${Math.abs(mov)}`);
//   }
//   // console.log(arr);
// });

/////////////////////////////////////////////////
// // Lecture 05. Looping Arrays forEach

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`short form: ${key}, full form: ${value}`);
// });

// const currenciesShort = new Set(['TAKA', 'USD', 'GBP', 'TAKA', 'EUR', 'EUR']);
// console.log(currenciesShort);

// currenciesShort.forEach(function (value, key, set) {
//   console.log(`value: ${value} key: ${key} map: ${set}`);
// });

/////////////////////////////////////////////////
// Lecture 06. PROJECT Bankist App

// just project overview

/////////////////////////////////////////////////
// Lecture 08. coading challange 01

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function checkDogs(julia, kate) {
//   const julisCurretData = julia;
//   julisCurretData.splice(0, 1);
//   julisCurretData.splice(-2);
//   // console.log(julisCurretData);

//   const juliaAndKateData = julisCurretData.concat(kate);
//   // console.log(juliaAndKateData);

//   juliaAndKateData.forEach(function (value, key, map) {
//     if (value >= 3) {
//       console.log(
//         `Dog number ${key + 1} is an adult, and is ${value} years old`
//       );
//     } else {
//       console.log(`Dog number ${key + 1} is still a puppy 🐶`);
//     }
//   });
// }
// console.log(`----------First Data----------`);
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log(`----------Secound Data----------`);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
// Lecture 09. Data Transformations map, filter, reduce
// just theory

/////////////////////////////////////////////////
// // Lecture 10. The map Method

// console.log(movements);

// const eurUSD = 1.1;

// //arrow function
// const movementsUsd2 = movements.map(mov => mov * eurUSD);
// console.log(movementsUsd2);

// //Normal function
// const movementsUsd = movements.map(function (mov) {
//   return mov * eurUSD;
// });
// console.log(movementsUsd);

// //Using loop
// const movementsUDSfor = [];
// for (const mov of movements) {
//   movementsUDSfor.push(mov * eurUSD);
// }
// console.log(movementsUDSfor);

// //More details and arrow function with return value

// const movementDescription = movements.map((mov, i) => {
//   return `entry no ${i + 1}: you ${mov > 0 ? 'Diposit' : 'withrow'} ${Math.abs(
//     mov
//   )} `;
// });

// console.log(movementDescription);

/////////////////////////////////////////////////
// Lecture 12. The filter Method

// console.log(movements);

// //using filter mathod
// const deposit = movements.filter(mov => {
//   return mov > 0;
// });
// console.log(deposit);

// //using filter mathod
// const withdraw = movements.filter(mov => {
//   return mov < 0;
// });
// console.log(withdraw);

// //using loop
// const dipositFor = [];
// for (const mov of movements) {
//   if (mov > 0) dipositFor.push(mov);
// }
// console.log(dipositFor);

// //using loop
// const withdrawFor = [];
// for (const mov of movements) {
//   if (mov < 0) withdrawFor.push(mov);
// }
// console.log(withdrawFor);

/////////////////////////////////////////////////
// Lecture 13. The reduce Method (outside the project)

// console.log(movements);
// const balance = movements.reduce(function (
//   accumulator,
//   curent,
//   iteration,
//   fullArray
// ) {
//   console.log(`${iteration}: ${accumulator}`);
//   // console.log(
//   //   `accumulator: ${accumulator} curent:${curent}  iteration,${iteration} fullArray${fullArray}`
//   // );
//   return accumulator + curent;
// },
// 0);
// console.log(balance);

// //reduce mathod
// const balance = movements.reduce(
//   (accumulator, curent) => accumulator + curent,
//   0
// );
// console.log(balance);

// //for loop
// let balance2 = 0;
// for (const i of movements) {
//   balance2 += i;
// }
// console.log(balance2);

// //maximum value by reduce mathod
// const maximum = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(maximum);

/////////////////////////////////////////////////
// Lecture 14. Coding Challenge #2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(cur => (cur <= 2 ? 2 * cur : 16 + cur * 4));

//   const eighteenplus = humanAge.filter(cur => cur >= 18);

//   console.log(eighteenplus);
//   console.log(humanAge);

//   const avgAge =
//     eighteenplus.reduce((acc, cur) => acc + cur, 0) / eighteenplus.length;
//   console.log(avgAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
// Lecture 15. The Magic of Chaining Methods (outside the project)

// // console.log(movements);

// const euroToUSD = 1.1;
// const allInOne = movements
//   .filter(cur => cur > 0)
//   // .map((cur, i, arr) => {
//   //   console.log(arr);
//   //   return cur * euroToUSD;
//   // })
//   .map(cur => cur * euroToUSD)
//   .reduce((acc, cur) => acc + cur);
// // console.log(allInOne);

/////////////////////////////////////////////////
// Lecture 16. Coding Challenge #3
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages =>
//   ages
//     .map(cur => (cur <= 2 ? 2 * cur : 16 + cur * 4))
//     .filter(cur => cur >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);

/////////////////////////////////////////////////
// Lecture 17. The find Method
// console.log(movements);
// const firstwithdraw = movements.find(mov => mov < 0);

// console.log(firstwithdraw);

// console.log(accounts);
// const myaccount = accounts.find(acc => acc.owner === 'Maruf Billah');
// console.log(myaccount);

// let myaccount2;
// for (const acc of accounts) {
//   if (acc.owner === 'Maruf Billah') myaccount2 = acc;
// }
// console.log(myaccount2);

/////////////////////////////////////////////////
// // Lecture 21. some and every (outside the project)
// console.log(movements);

// //quality or individual search
// console.log(movements.includes(-130));

// //Some: conditional search
// console.log(movements.some(mov => mov === -130));

// const highDeposit = movements.some(mov => mov > 2999);
// console.log(highDeposit);

// //every: conditional search // every element should math the condition
// console.log(movements.every(mov => mov > 0));

// console.log(account4.movements.every(mov => mov > 0));

// //Sepearate callback
// console.log('---------------------');
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/////////////////////////////////////////////////
// Lecture 22. flat and flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acu, acc) => acu + acc, 0);

// console.log(overallBalance);

// const anotherOverallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acu, acc) => acu + acc, 0);
// console.log(anotherOverallBalance);

/////////////////////////////////////////////////
// Lecture 23. Sorting Arrays (outside the project)
//String
// const owners = ['maruf', 'mahady', 'abdullah', 'mahi'];
// console.log(owners.sort());
// console.log(owners);

// //Numbers
// console.log(movements.sort());
// console.log(movements);

// //Reeturn  < 0, A, B
// //Return > 0, B, A
// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

/////////////////////////////////////////////////
// Lecture 24. More Ways of Creating and Filling Arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// const xyz = new Array(7, 2);
// // console.log(xyz);
// // console.log(x.map(() => 5));
// // console.log(xyz.map(() => 5));

// x.fill(1, 3, 5);
// x.fill(2, 1, 3);
// console.log(x);

// arr.fill(11, 1, 2);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 15 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 20 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   // const movementUI = Array.from(document.querySelectorAll('.movements__value'));

//   // console.log(movementUI.map(el => Number(el.textContent.replace('৳', ''))));

//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('৳', ''))
//   );
//   console.log(movementsUI);

//   //Another way
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2.map(el => Number(el.textContent.replace('৳', ''))));
// });

/////////////////////////////////////////////////
// Lecture 25. Summary Which Array Method to Use
// just summary of 23 method

/////////////////////////////////////////////////
// Lecture 26. Array Methods Practice

// // 01.
// // const bankDepositSum = accounts
// //   .map(acc => acc.movements)
// //   .flat()
// //   .filter(mov => mov > 0)
// //   .reduce((sum, cur) => sum + cur, 0);

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 02.
// // const numDeposit1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposit1000);

// //Prefixed ++ operator
// // let a = 10;
// // console.log(a++);
// // console.log(a);
// // let b = 20;
// // console.log(++b);
// // console.log(b);

// // 03.
// // const sums = accounts
// //   .flatMap(acc => acc.movements)
// //   .reduce(
// //     (sums, cur) => {
// //       cur > 0 ? (sums.deposits += cur) : (sums.withrawls += cur);
// //       return sums;
// //     },
// //     { deposits: 0, withrawls: 0 }
// //   );

// const { deposits, withrawls } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withrawls += cur);
//       sums[cur > 0 ? 'deposits' : 'withrawls'] += cur;
//       return sums;
//     },
//     { deposits: 0, withrawls: 0 }
//   );

// console.log(deposits, withrawls);

// // 04.
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exception = [
//     'a',
//     'an',
//     'the',
//     'is',
//     'and',
//     'but',
//     'or',
//     'on',
//     'in',
//     'with',
//   ];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exception.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   console.log(capitalize(titleCase));
// };

// convertTitleCase('this is a nice title');
// convertTitleCase('this is a LONG title but not too long');
// convertTitleCase('and here is another title with an EXAMPLE');

/////////////////////////////////////////////////
// Lecture 27. Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 01.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 02.
const foodQuntity = dogs.findIndex(dog => dog.owners.includes('Sarah'));
// console.log(dogs[foodQuntity].curFood);
// console.log(dogs[foodQuntity].recommendedFood);
console.log(
  dogs[foodQuntity].curFood < dogs[foodQuntity].recommendedFood
    ? `it's eating too little`
    : `it's eating too much`
);

// 03.
let eatLess = [];
let eatMore = [];
dogs.map(acc =>
  acc.curFood < acc.recommendedFood
    ? eatLess.push(acc.owners)
    : eatMore.push(acc.owners)
);

// 04.
const result = `the ownesr who's dogs eat less is ${eatLess
  .flat()
  .join(' and ')} and the owners who's dogs eat more ${eatMore
  .flat()
  .join(' and ')}`;
console.log(result);

// 05.
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));

// 06.
// current > (recommended * 0.90) && current < (recommended * 1.10).

const checking = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checking));

// 07.
const okFood = dogs.filter(checking);
console.log(okFood);

// 08.
const newArray = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(newArray);
