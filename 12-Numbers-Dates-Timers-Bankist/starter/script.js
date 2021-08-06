'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Maruf Billah',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2021-02-05T16:33:06.386Z',
    '2021-07-10T14:43:26.374Z',
    '2021-07-14T18:49:59.371Z',
    '2021-07-15T12:01:20.894Z',
  ],
  currency: 'BDT',
  locale: 'bn-BD', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2021-07-10T14:43:26.374Z',
    '2021-07-14T18:49:59.371Z',
    '2021-07-15T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

//////////////////////////////////////////////
// lecture 09. Operations With Dates (inside the project)

const formatMovementsDate = function (date, locale) {
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDayPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  //////////////////////////////////////////////
  // lecture 10. Internationalizing Dates (Intl) part 2
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

// lecture 11. Internationalizing Numbers (Intl) (inside the project part 1)
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDate(date, acc.locale);

    const formatedMov = formatCur(mov, acc.locale, acc.currency);

    // new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formatedMov = formatCur(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = formatedMov;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//logout timer
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//Fake always log in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//Experimenting API

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //////////////////////////////////////////////
    // lecture 10. Internationalizing Dates (Intl) part 1

    //create date
    // const now = new Date();
    // labelDate.textContent = `${now.getDay()} / ${now.getMonth()} / ${now.getFullYear()}`;
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      weekday: 'short',
    };
    // const locale = navigator.language;
    const locale = currentAccount.locale;

    console.log(locale); // should show in bangla

    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //sTART TIMER
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//////////////////////////////////////////////
// lecture 12. Timers setTimeout and setInterval (inside the project)
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
      //reset the timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//////////////////////////////////////////////
// lecture 01
//just intro

//////////////////////////////////////////////
// lecture 02
//Theory part

//////////////////////////////////////////////
// lecture 03. Converting and Checking Numbers

// console.log(23 === 23.0);

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// console.log(Number('23'));
// console.log(+'23');

// //Parsing
// console.log(Number.parseInt('240taka'));
// console.log(Number.parseInt('n240taka'));
// console.log(Number.parseInt('240taka10'));
// console.log(Number.parseInt('240taka', 10));

// console.log('------------ekhane------------');
// console.log(Number.parseFloat('2.40taka', 10));
// console.log(Number.parseInt('2.40taka10'));
// console.log(Number.parseInt('     2.40taka10'));

// console.log('------------ekhaneeee------------');
// console.log(Number.isNaN(23));
// console.log(Number.isNaN('23'));
// console.log(Number.isNaN(+'23x'));
// console.log(Number.isNaN(+'23'));
// console.log(Number.isNaN(10 / 0));
// console.log(Number.isNaN(+'2/f'));
// console.log(Number.isNaN(+'f' - 5));

// console.log('------------eeeeekhaneeee------------');
// console.log(Number.isFinite(+'23'));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(20 / 0));
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(20 + 20));
// console.log('..........................');
// console.log(Number.isInteger(20));

//////////////////////////////////////////////
// lecture 04. Math and Rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 10, 25, 636, 154, 5, 55, 4));
// console.log(Math.max(5, 10, 25, 636, '154', 5, 55, 4));
// console.log(Math.max(5, 10, 25, 636, '154taka', 5, 55, 4));

// console.log(Math.min(5, 10, 25, 636, 154, 5, 55, 4));

// console.log(Math.PI ** (Number.parseFloat('10') ** 2));

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(5, 20));

// // console.log(Math.trunc(Math.random() * 5));
// console.log('.........................');
// console.log(Math.trunc(21.332564));
// console.log(Math.round(25.545644));
// console.log(Math.round(25.545644));

// console.log(Math.ceil(25.545644));
// console.log(Math.floor(25.54));

// console.log(Math.ceil(-25.9));
// console.log(Math.floor(-20.1)); //wrong value
// console.log(Math.trunc(-20.54));

// console.log('.........................');
// console.log((2.7).toFixed(0));
// console.log((2.70112).toFixed(2));
// console.log((2.744).toFixed(1));
// console.log((2.74).toFixed(3));
// console.log(+(2.742).toFixed(2));

//////////////////////////////////////////////
// lecture 05. The Remainder Operator
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// // labelBalance.addEventListener('click', function () {
// //   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
// //     // 0, 2, 4, 6
// //     if (i % 2 === 0) row.style.backgroundColor = 'lightBlue';
// //     // 0, 3, 6, 9
// //     if (i % 3 === 0) row.style.backgroundColor = 'lightgreen';
// //   });
// // });

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__value')].forEach((row, i) => {
//     // console.log(row);
//     // console.log(i);

//     if (i % 2 === 0) row.style.backgroundColor = 'lightBlue';
//   });
// });

//////////////////////////////////////////////
// lecture 06. Working with BigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(574645645645645645645645645n);
// console.log(BigInt(48384302));

// // Operations
// console.log(10000n + 10000n);
// console.log(456456456456456456456456456n * 10000000n);
// // console.log(Math.sqrt(16n));

// const huge = 46354634534534534545543n;
// const num = 23;
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(10n > 12);
// console.log(10n === 10);
// console.log(10n == 10);
// console.log(`''''''`);
// console.log(typeof 50n);
// console.log(20n == '20');

// console.log(huge + ' wow!!!');

// // Divisions
// console.log(11n / 3n);
// console.log(10 / 3);

//////////////////////////////////////////////
// lecture 07. Creating Dates
// const now = new Date();
// console.log(now);

// console.log(new Date('Jul 13 2021 04:12:13'));
// console.log(new Date('15 December 2021 12:10:10'));
// console.log(new Date('15 December'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2011, 0, 10, 10, 12, 13));
// console.log(new Date(2011, 0, 40));
// console.log(new Date(0));
// console.log(new Date(4 * 24 * 60 * 60 * 1000));

// const future = new Date(2030, 0, 10, 10, 15);
// console.log(future);

// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.toDateString());
// console.log(future.toTimeString());
// console.log(future.toLocaleDateString());
// console.log(future.toString());
// console.log(future.toJSON());
// console.log(future.getTime());

// console.log(new Date(1894248900000));

// console.log(Date.now());

// future.setFullYear(2015);
// console.log(future);

//////////////////////////////////////////////
// lecture 08. Adding Dates to Bankist App
// everything change in to project

//////////////////////////////////////////////
// lecture 09. Operations With Dates (outside the project)

// const future = new Date(2030, 0, 10, 10, 15);
// console.log(+future);

// const calcDayPassed = (date1, date2) =>
//   Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

// const days1 = calcDayPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 4, 5));
// console.log(days1);

//////////////////////////////////////////////
// lecture 11. Internationalizing Numbers (Intl) (outside the project)
// const num = 6439743.22;

// // const options = {
// //   style: 'unit',
// //   unit: 'celsius',
// // };
// // const options = {
// //   style: 'percent',
// // };
// const options = {
//   style: 'currency',
//   currency: 'BDT',
//   // useGrouping: false,
// };

// console.log('US:        ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('German:    ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria:     ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log('Bangladesh:', new Intl.NumberFormat('bn-BD', options).format(num));

//////////////////////////////////////////////
// lecture 12. Timers setTimeout and setInterval (outside the project)

// // setTimeout
// // setTimeout(() => {
// //   console.log(`here is my pizza`);
// // }, 3000);

// // console.log(`waiting...`);

// const ingredient = ['olives', 'spinach', 'mashroom'];
// // const ingredient = ['tomato', 'spinach', 'mashroom'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => {
//     console.log(`here is my pizza with ${ing1} and ${ing2}`);
//   },
//   3000,
//   ...ingredient
// );
// console.log(`waiting...`);

// if (ingredient.includes('tomato')) clearTimeout(pizzaTimer);

// // setTimeInterval
// setInterval(function () {
//   const now = new Date();

//   console.log(formatMovementsDate(now, currentAccount.locale));
// }, 1500);

//////////////////////////////////////////////
// lecture 13. Implementing a Countdown Timer (outside the project)
