'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
//
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDeliver({
    starterIndex = 1,
    mainIndex = 0,
    time = '00:00',
    address = null,
  }) {
    console.log(
      `Oder paichi!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} delivari hobe ${address} thikanay and shomoy holo ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`the pasta with ${ing1} , ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  // es6
  openingHours: openingHours,
  // or
  // openingHours,
};

// //.
// //.
// //.
//Lecture 24. String Methods Practice
// //.
// //.
// //
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40);
  console.log(output);
}

// //.
// //.
// //.
//Lecture 23. Coding Challenge #4
// //.
// //.
// //
// /*
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [x, y] of rows.entries()) {
//     const [f, s] = y.toLowerCase().trim().split('_');
//     // console.log(f, s);

//     const store = `${f}${s.replace(s[0], s[0].toUpperCase())}`;

//     console.log(`${store.padEnd(25)} ${'✅'.repeat(x + 1)} `);
//   }
// });

// //.
// //.
// //.
//Lecture 22. Working With Strings - Part 3
// //.
// //.
// //
// // Split and join
// console.log('I+am+A=Good+boy+yooo'.split('+'));
// console.log('Maruf Billah'.split(' '));

// const [firstName, lastName] = 'Maruf Billah'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // console.log(names);
//     if (n.split('-')) {
//       const a = n.split('-');
//       const b = n;

//       for (const z of a) {
//         namesUpper.push(z.replace(z[0], z[0].toUpperCase()));
//       }
//     } else {
//       namesUpper.push(z.replace(z[0], z[0].toUpperCase())).split(b);
//     }
//     // console.log(namesUpper);
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('fahima-e-Jannatee Khan and-me');
// capitalizeName('Maruf Billah');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// // Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(50);
// planesInLine(13);
// planesInLine(1);

// //.
// //.
// //.
//Lecture 21. Working With Strings - Part 2
// //.
// //.
// //
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'Maruf'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'marufbillah03033@gmail.com';
// const loginEmail = '  Marufbillah03033@Gmail.com \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// const announcement2 =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate').replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement2.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('maruf'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// //.
// //.
// //.
//Lecture 20. Working With Strings - Part 1
// //.
// //.
// //
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal')); //case sensitive so, it won't found

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-6));
// console.log(airline.slice(4, -9));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   // console.log(s);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Maruf'));
// console.log(typeof new String('Maruf'));

// console.log(typeof new String('Maruf').slice(1));

// //.
// //.
// //.
//Lecture 19. Coding Challenge #3
// //.
// //.
// //
// /*
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1.
// // const events = new Set();
// // for (const [x, y] of gameEvents) {
// //   events.add(y);
// // }
// // console.log(events);
// const events2 = [...new Set(gameEvents.values())];
// console.log(events2);

// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// //3.
// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //4.
// for (const [x, y] of gameEvents) {
//   console.log(
//     `[${x < 46 ? 'First Hulf ' : 'Secound Hulf '}] time: ${x} Events: ${y}`
//   );

// //.
// //.
// //.
//Lecture 18: Summary Which Data Structure to Use
// //.
// //.
// //.
//theory part
//array vs sets
//object vs maps

// //.
// //.
// //.
//Lecture 17: Maps details
// //.
// //.
// //.
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// //coonvert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// //quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Y0ur Ans'));
// // console.log(answer);
// const answer = 3;

// console.log(question.get(question.get('correct') === answer));

// //coonvert map to object
// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// // //.
// // //.
// // //.
// //Lecture 16: Maps
// // //.
// // //.
// // //.
// const rest = new Map();
// rest.set('name', 'Abul Hotel');
// rest.set(1, 'Moghbazar');
// console.log(rest.set(2, 'DIT main Road'));

// rest
//   .set('catagories', ['deshi', 'chinise', 'italian', 'korian', 'sea food'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are close');

// console.log(rest.get(1));
// console.log(rest.get(2));
// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 10;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('catagories'));
// console.log(rest.has(1));
// console.log(rest.has(3));

// rest.delete(1);

// console.log(rest);
// console.log(rest.size);

// // rest.clear();
// // rest.set([3, 4], 'test'); //not ok

// // console.log(rest);
// // console.log(rest.size);

// // console.log(rest.get([1, 2]));
// const arr = [3, 4];
// rest.set(arr, 'test');

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(document.querySelector('h1')));
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// // //.
// // //.
// // //.
// //Lecture 15: Sets
// // //.
// // //.
// // //.
// const ordersSet = new Set(['vat', 'dal', 'vorta', 'vat', 'alu', 'alu', 'dal']);

// console.log(ordersSet);
// console.log(new Set('Maruf'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('dal'));
// console.log(ordersSet.has('piyaj'));
// ordersSet.add('tomato vorta');
// console.log(ordersSet);
// ordersSet.add('tomato vorta');
// console.log(ordersSet);

// const brothers = ['maruf', 'mahady', 'abdullah', 'abdullah', 'mahady'];
// console.log(brothers);
// let uniqueBrothers = new Set(brothers);
// console.log(uniqueBrothers);
// // uniqueBrothers = [...new Set(brothers)];
// // console.log(uniqueBrothers);

// console.log(uniqueBrothers.size);

// console.log(new Set('amimarufbillah').size);

// //.
// //.
// //.
//Lecture 14: Coding Challenge #2
// //.
// //.
// //.
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // 1.
// console.log(game.scored);
// for (const [x, y] of game.scored.entries()) {
//   console.log(`Goal ${x + 1}: ${y}`);
//   //console.log(y);
// }

// // 2.
// const allValue = Object.values(game.odds);
// let avg = 0;
// for (const x of allValue) {
//   avg += x;
// }
// avg /= allValue.length;
// console.log(avg);

// // 3.
// const { team1, x: draw, team2 } = game.odds;
// const allValues = [team1, draw, team2];
// const allName = [game.team1, 'Draw', game.team2];
// // for (let i = 0; i < 3; i++) {
// //   console.log(
// //     `Odd of ${allName[i] == 'Draw' ? 'Draw' : 'Victory'} ${allName[i]}: ${
// //       allValues[i]
// //     }`
// //   );
// // }
// for (const [i, el] of allName.entries()) {
//   console.log(`Odd of ${el == 'Draw' ? '' : 'Victory'} ${el}: ${allValues[i]}`);
// }

// // console.log(`Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5`);

// //4 BONUS.
// // BONUS
// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// //.
// //.
// //.
// // //Lecture 13:
// //.
// //.
// //.

// //Properties name
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Properties values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// // [Key , value]
// for (const [day, { open: o, close: c }] of entries) {
//   console.log(`On ${day} we open at ${o} and close at ${c}`);
// }

// //.
// //.
// //.
// //Lecture 12:
// //.
// //.
// //.
// if (restaurant.openingHours.mon && restaurant.openingHours.mon.open) {
//   console.log(restaurant.openingHours.mon.open);
// }
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // const open = restaurant.openingHours[day]?.open ?? 'closed';
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   // if (restaurant.openingHours[day])
//   console.log(
//     `On ${day} ${
//       open != 'closed' ? 'we open at' : 'the restaurent is'
//     } ${open} `
//   );
// }

// //Methods
// console.log(restaurant.order?.(1, 1) ?? 'Method does not exist');
// console.log(restaurant.PantaOrder?.(0, 1) ?? 'Method does not exist');

// //In Array
// const user = [
//   { name: 'Maruf', age: 26, Gender: 'Male' },
//   { name: 'Shuvo', age: 25, Gender: 'Male' },
// ];

// if (user.length > 0) {
//   console.log(user[0].name);
// } else {
//   console.log('No user exist');
// }

// console.log(user[2]?.name ?? 'No user exist');

// //.
// //.
// //.
// // //Lecture 11:
// //.
// //.
// //.
//Just change 3 thing in the object in top.

// //.
// //.
// //.
// // //Lecture 10:
// //.
// //.
// //.
// const manu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of manu) console.log(item);

// for (const item of manu.entries()) {
//   console.log(item);
// }
// for (const [i, el] of manu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log([...manu.entries()]);

//.
//.
//.
// //Lecture 09: Coding Challenge #1
//
//.
//.
/*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // 1.
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// // const players1 = game.players[0];
// const [players1, players2] = game.players;
// console.log(...players1);

// // 2.
// const [gk, ...fieldplayers] = players1;
// console.log(gk);

// // 3.
// const allPlayers = [...players1, ...players2];

// // 4.
// const player1Final = [...players1, 'Maruf', 'Mahady', 'Abdullah'];

// // 5.
// // const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
// // console.log(draw);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...player) {
//   console.log(
//     `${player.length} goal is total. the palyers are ${player[0]} , ${player[1]} , ${player[2]} and ${player[3]}`
//   );
// };
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is win');
// team2 < team1 && console.log('Team 2 is win');

// //.
// //.
// //.
// //Lecture 08:
// //.
// //.
// //.
// restaurant.guestNumber = 0; // or ''
// const guest1 = restaurant.guestNumber ? restaurant.guestNumber : 10;
// console.log(guest1);
// const guestOK = restaurant.guestNumber ?? 10;
// console.log(guestOK);

//.
//.
//.
// //Lecture 07:
//.
//.
//.
// console.log('-----OR-----');
// console.log(3 || 'Maruf');
// console.log('' || 'Maruf');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || false || '' || null || 0 || 'Maruf');

// restaurant.guestNumber = 23;
// const guest1 = restaurant.guestNumber ? restaurant.guestNumber : 10;
// console.log(guest1);

// const guest2 = restaurant.guestNumber || 15;
// console.log(guest2);

// console.log('-----AND-----');
// console.log(0 && 'Maruf');
// console.log(7 && 'Maruf');

// console.log('Hello' && 23 && null && 'Maruf');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// console.log(10 == 10);
// //.
// //.
// //.
// // //Lecture 06:
// //.
// //.
// //.
// //Spreed
// const arr = [1, 2, ...[3, 4]];

// //REST
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [Pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, risotto, otherFoods);

// //In object
// const { sat, ...wekend } = restaurant.openingHours;
// console.log(wekend);

// //in function
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// let ab = [1, 2, 3, 4, 5];
// // console.log(ab);
// add(...ab);

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('pauruti', 'piyaj', 'kalo jolpai', 'pui shakh');
// restaurant.orderPizza('pauruti');
//.
//.
//.
// //Lecture 05:
//.
//.
//.
// const arr = [7, 8, 9, 10];
// const beadNewArray = [5, 6, arr[0], arr[1], arr[2]];
// console.log(beadNewArray);

// const newArray = [5, 6, ...arr];
// console.log(newArray);

// console.log(...newArray);

// const newManu = [...restaurant.mainMenu, 'vortavat'];
// console.log(newManu);
// console.log(...newManu);

// const mainManuCopy = [...restaurant.mainMenu];
// console.log(mainManuCopy);

// const manu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(manu);
// // Iterables are array, strings, maps, sets, NOT objects

// const str = 'Maruf';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// console.log(...str);
// // we cannot use it
// // console.log(`${...str} Billah`);

// // //real world example
// // const ingred = [
// //   prompt('Enter engrediniet 1:'),
// //   prompt('Enter engrediniet 2:'),
// //   prompt('Enter engrediniet 3:'),
// // ];
// const ingred = ['ruti', 'gosto', 'piyaj'];
// console.log(ingred);
// restaurant.orderPasta(ingred[0], ingred[1], ingred[2]);
// restaurant.orderPasta(...ingred);

// //object
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Abul hotel';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //Lecture 04:
// restaurant.orderDeliver({
//   time: '10:10',
//   address: 'Dhaka, BD',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDeliver({
//   address: 'Dhaka, BD',
// });

// restaurant.orderDeliver({
//   time: '11:10',
//   mainIndex: 0,
//   starterIndex: 1,
//   address: 'Moghbazar',
// });
// restaurant.orderDeliver({
//   time: '11:10',
//   address: 'noyatola',
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: staters = [] } = restaurant;
// console.log(menu, staters);

// //mutating variable
// let a = 1;
// let b = 9;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested object
// const {
//   sat: { open: o, close: c, def: d = 3 },
// } = restaurant.openingHours;
// console.log(o, c, d);

//Lecture 01: start with intro
//Lecture 02: No lecture 2 available just go on lecture 3
// //Lecture 03:
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, , next] = restaurant.categories;
// console.log(first, next);

// // const tempValue = first;
// // first = next;
// // next = tempValue;
// // console.log(first, next);

// [first, next] = [next, first];
// console.log(first, next);

// //recive 2 retirn value
// // console.log(restaurant.order(2, 0));

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// //.
// //.
// //.
// // //Lecture 09: Coding Challenge #1
// //
// //.
// //.
// /*
// // We're building a football betting app (soccer for my American friends 😅)!

// // Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // GOOD LUCK 😀
// // */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals(...players) {
//     let s = `${players.length} goals has scored`;
//     console.log(s);
//   },
// };

// let [player1, player2] = game.players;

// let [[gk1, ...fieldPlayers1], [gk2, ...fieldPlayers2]] = game.players;
// let allPlayers = [...player1, ...player2];
// let playerFinal1 = ['Thiago', 'Coutinho', 'Perisic', ...player1];
// let { team1, x: draw, team2 } = game.odds;
// game.printGoals(...game.scored);
// console.log(team1);
