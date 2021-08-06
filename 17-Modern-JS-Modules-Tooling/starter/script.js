// 'use strict'; //module always use strick mode

// // // // // // // // // // // // // // //
// Lecture 01. Section Intro

// // // // // // // // // // // // // // //
// Lecture 01. Section Roadmap

// // // // // // // // // // // // // // //
// Lecture 03. An Overview of Modern JavaScript Development
//Overview of Modern JavaScript Development and knowing about NPM,  Babel, webpack, parcel etc..

// // // // // // // // // // // // // // //
// Lecture 04. An Overview of Modules in JavaScript
// theory about Overview of Modules in JavaScript

// // // // // // // // // // // // // // //
// Lecture 05. Exporting and Importing in ES6 Modules
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// // // // // // // // // // // // // // // //
// // Lecture 06. The Module Pattern
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('kola', 5);
// ShoppingCart2.addToCart('peyara', 0);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.orderStock);

// // // // // // // // // // // // // // // //
// // Lecture 07. CommonJS Modules

// // Export
// export.addTocart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   // Import
//   const { addTocart } = require('./shoppingCart.js');

// // // // // // // // // // // // // // //
// Lecture 08. A Brief Introduction to the Command Line
// Introduction to the Command Line

// // // // // // // // // // // // // // //
// Lecture 09. Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'porota', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);
// console.log(state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = true;
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const maruf = new Person('Maruf');

console.log('Maruf' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';

// // // // // // // // // // // // // // //
// Lecture 10. Bundling With Parcel and NPM Scripts
// learning about Bundling With Parcel and NPM Scripts

// // // // // // // // // // // // // // //
// Lecture 11. Configuring Babel and Polyfilling
// learning about Configuring Babel and Polyfilling

// // // // // // // // // // // // // // //
// Lecture 12. Review Writing Clean and Modern JavaScript
// Review Writing Clean and Modern JavaScript

// // // // // // // // // // // // // // //
// Lecture 13. Let's Fix Some Bad Code Part 1
// Fix Some Bad Code Part 1

// // // // // // // // // // // // // // //
// Lecture 14. Declarative and Functional JavaScript Principles
// theory about Declarative and Functional JavaScript Principles

// // // // // // // // // // // // // // //
// Lecture 15. Let's Fix Some Bad Code Part 2
//colde in clean.js
