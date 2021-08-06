'use strict';

////////////////////////////////////////////////////
// lecture 01
//just intro

////////////////////////////////////////////////////
// lecture 02
//section roadmap

////////////////////////////////////////////////////
// lecture 03. What is Object-Oriented Programming
//theory about OOP

////////////////////////////////////////////////////
// lecture 04. OOP in JavaScript
// learn how OOP actually work in JavaScript

// ////////////////////////////////////////////////////
// // lecture 05. Constructor Functions and the new Operator

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   this.calcAge = function () {
//   //     console.log(2021 - this.birthYear);
//   //   };
//   //   console.log(this);
// };

// const maruf = new Person('Maruf', '1994');
// console.log(maruf);

// // 1. New empty object is created
// // 2. function is called, this will an empty object this = {}
// // 3. ew opject is linked to prototype
// // 4. function automaticlly reaturn the function {}

// const mahady = new Person('Mahady', '1996');
// console.log(mahady);

// const abd = new Person('Abd', '1998');
// console.log(abd);

// // const masud = 'Masud';
// console.log(maruf instanceof Person);
// // console.log(masud instanceof Person);

// ////////////////////////////////////////////////////
// // lecture 06. Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };
// // console.log(Person.prototype);

// maruf.calcAge();
// mahady.calcAge();
// console.log(maruf.__proto__);
// console.log(maruf.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(maruf));
// console.log(Person.prototype.isPrototypeOf(abd));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'ghoroya';
// console.log(maruf.species, abd.species);

// console.log(maruf.hasOwnProperty('firstName'));
// console.log(maruf.hasOwnProperty('soecies'));
// console.log(maruf.hasOwnProperty('soeciessss'));

// ////////////////////////////////////////////////////
// // lecture 07. Prototypal Inheritance and The Prototype Chain
// //lecture on prototype (JS inheritance) in theory

// ////////////////////////////////////////////////////
// // lecture 08. Prototypal Inheritance on Built-In Objects
// console.log(maruf.__proto__);
// console.log(maruf.__proto__.__proto__); //object.prototype is the top of property chain
// console.log(maruf.__proto__.__proto__.__proto__); // its null

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [2, 2, 5, 6, 3, 2, 3, 6, 5, 2]; // = new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.myUnique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.myUnique());
// //But this is not a good idea because
// // 1. in new version JS can create the similar functionality thats break your code
// // 2. if you work with big project with multiple peole then it make bug for creating same function with different name
// const h1 = document.querySelector('h1');
// // console.log(h1);
// console.dir(h1);

// console.dir(x => X + 1);

////////////////////////////////////////////////////
// lecture 09. Coding Challenge #1
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelaration = function () {
//   this.speed = this.speed + 20;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.speed = this.speed - 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 250);
// const mercedes = new Car('Mercedes', 220);

// bmw.accelaration();
// bmw.break();
// bmw.accelaration();
// bmw.accelaration();

// mercedes.break();
// mercedes.break();
// mercedes.break();
// mercedes.break();
// mercedes.accelaration();

////////////////////////////////////////////////////
// lecture 10. ES6 Classes

//class expressionco
// const PersonCL = class {};

//class declearation
// class PersonCL {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }
//   calcAge() {
//     console.log(2021 - this.birthyear);
//   }

//   get age() {
//     return 2021 - this.birthyear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey = function () {
//     console.log('hey 🙋‍♂️');
//     // console.log(this);
//   };
// }

// const mahi = new PersonCL('Mahi Khan', 1996);
// console.log(mahi);
// mahi.calcAge();
// console.log(mahi.age);

// console.log(mahi.__proto__ == PersonCL.prototype);

// PersonCL.prototype.greet = function () {
//   console.log(`hey ${this.fullName}`);
// };
// mahi.greet();

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mode

// const jessyPinkman = new PersonCL('Jessy pinkman', 1980);
// // jessyPinkman.greet();
// // PersonCL.greet();
// // PersonCL.hey();

// ////////////////////////////////////////////////////
// // lecture 11. Setters and Getters
// const account = {
//   owner: 'Maruf',
//   movements: [100, 64, 564, 5, 4, 65],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// // account.latest(100) //old way without set or setter
// account.latest = 100;
// console.log(account.movements);

// ////////////////////////////////////////////////////
// // lecture 12. Static Methods

// //from lecture 5 codes
// Person.hey = function () {
//   console.log('hey 🙋‍♂️');
//   // console.log(this);
// };

// Person.hey();
// // maruf.hey();

// //from last lecture edited

// PersonCL.hey();
// // mahi.hey(); //only work with class name not in prototype

// ////////////////////////////////////////////////////
// // lecture 13. Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const sabbir = Object.create(PersonProto);
// console.log(sabbir);
// sabbir.name = 'Sabbir';
// sabbir.birthYear = 1994;
// sabbir.calcAge();

// console.log(sabbir.__proto__ == PersonProto);

// const rupa = Object.create(PersonProto);
// rupa.init('Rupa', 1995);
// rupa.calcAge();

////////////////////////////////////////////////////
// lecture 14. Coding Challenge #2
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelaration() {
//     this.speed = this.speed + 20;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   break() {
//     this.speed = this.speed - 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('BMW', 120);
// console.log(ford.speed);
// console.log(ford.speedUS);

// ford.accelaration();
// ford.break();
// ford.speedUS = 200;
// ford.accelaration();

////////////////////////////////////////////////////
// lecture 15. Inheritance Between Classes Constructor Functions
// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }
// }

// class Student {
//   constructor(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }
// }
// const mahady = new Student('Mahady', 1996, 'Jalalaine');
// console.log(mahady);
// mahady.introduce();

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// class Student {
//   constructor(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
//   }
// }
// // Linking prototypes
// // Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mahady = new Student('Mahady', 1996, 'Jalaline');
// mahady.introduce();
// mahady.calcAge();

// console.log(mahady.__proto__);
// console.log(mahady.__proto__.__proto__);

// console.log(mahady instanceof Student);
// console.log(mahady instanceof Person);

// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

////////////////////////////////////////////////////
// lecture 16. Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

////////////////////////////////////////////////////
// lecture 17. Inheritance Between Classes ES6 Classes

// class PersonCL {
//   constructor(fullName, birthyear) {
//     this.fullName = fullName;
//     this.birthyear = birthyear;
//   }
//   calcAge() {
//     console.log(2021 - this.birthyear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2021 - this.birthyear;
//   }

//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey = function () {
//     console.log('hey 🙋‍♂️');
//     // console.log(this);
//   };
// }

// class StudentCL extends PersonCL {
//   constructor(fullName, birthYear, course) {
//     //always need to happen first
//     super(fullName, birthYear);
//     //don't need this
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I am ${2021 - this.birthyear} years old. but i fell like i am ${
//         2021 - this.birthyear - 10
//       } years old`
//     );
//   }
// }

// // const mahi = new StudentCL('Mahi khan', 1996);
// const mahi = new StudentCL('Mahi khan', 1996, 'Phamaciticals');
// mahi.introduce();
// mahi.calcAge();

// ////////////////////////////////////////////////////
// // lecture 18. Inheritance Between Classes Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const studentproto = Object.create(PersonProto);
// studentproto.init = function (fullName, birthYear, course) {
//   PersonProto.init.call(this, fullName, birthYear);
//   this.course = course;
// };

// studentproto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// const abd = Object.create(studentproto);
// abd.init('Abdullah Ibne Masud', 1998, 'Computer science');
// abd.introduce();
// abd.calcAge();

////////////////////////////////////////////////////
// lecture 19. Another Class Example
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`welcome, ${this.owner}`);
//   }
//   deposit(val) {
//     this.movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }
//   approveLone(val) {
//     return true;
//   }

//   requestLone(val) {
//     if (this.approveLone(val)) {
//       this.deposit(val);
//       console.log(`${val} taka approved and added to your account`);
//     }
//   }
// }

// const account1 = new Account('Maruf Billah', 'BDT', 1111);

// //not the good idea to do this. its make bug
// // account1.movements.push(200); //shouldent be accecable
// // account1.movements.push(-20);

// account1.deposit(200);
// account1.withdraw(20);
// account1.requestLone(2000);
// account1.approveLone(10); // shouldent be accecable
// console.log(account1);

////////////////////////////////////////////////////
// lecture 20. Encapsulation Protected Properties and Methods
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     //protected
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`welcome, ${this.owner}`);
//   }

//   get Movements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }
//   _approveLone(val) {
//     return true;
//   }

//   requestLone(val) {
//     if (this._approveLone(val)) {
//       this.deposit(val);
//       console.log(`${val} taka approved and added to your account`);
//     }
//   }
// }

// const account1 = new Account('Maruf Billah', 'BDT', 1111);

// //not the good idea to do this. its make bug
// // account1.movements.push(200); //shouldent be accecable
// // account1.movements.push(-20);

// account1.deposit(200);
// account1.withdraw(20);
// account1.requestLone(2000);
// // account1.approveLone(10); // shouldent be accecable
// console.log(account1);
// console.log(account1.Movements);

////////////////////////////////////////////////////
// // lecture 21. Encapsulation Private Class Fields and Methods
// // 1) Public fields
// // 2) Private fields
// // 3) Public methods
// // 4) Private methods
// // (there is also the static version)

// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     //protected
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`welcome, ${this.owner}`);
//   }
//   // 3) Public methods
//   get getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   requestLone(val) {
//     //not fully devloped
//     if (this.#approveLone(val)) {
//       // if (this._approveLone(val)) {
//       this.deposit(val);
//       console.log(`${val} taka approved and added to your account`);
//     }
//   }

//   static helper() {
//     console.log(`welcome to hell`);
//   }

//   // 4) Private methods
//   //not fully devloped
//   #approveLone(val) {
//     // _approveLone(val) {
//     return true;
//   }
// }

// const account1 = new Account('Maruf Billah', 'BDT', 1111);

// //not the good idea to do this. its make bug
// // account1.movements.push(200); //shouldent be accecable
// // account1.movements.push(-20);

// account1.deposit(200);
// account1.withdraw(20);
// account1.requestLone(2000);
// // account1.approveLone(10); // shouldent be accecable
// console.log(account1);
// console.log(account1.getMovements);

// //All are private variable and method
// // console.log(account1.#movements);
// // console.log(account1.#pin);
// // console.log(account1.#approveLone(100));

// Account.helper();
// // account1.helper();

////////////////////////////////////////////////////
// lecture 22. Chaining Methods
// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     //protected
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`welcome, ${this.owner}`);
//   }
//   // 3) Public methods
//   get getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLone(val) {
//     //not fully devloped
//     if (this.#approveLone(val)) {
//       // if (this._approveLone(val)) {
//       this.deposit(val);
//       console.log(`${val} taka approved and added to your account`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log(`welcome to hell`);
//   }

//   // 4) Private methods
//   //not fully devloped
//   #approveLone(val) {
//     // _approveLone(val) {
//     return true;
//   }
// }

// const account1 = new Account('Maruf Billah', 'BDT', 1111);

// //not the good idea to do this. its make bug
// // account1.movements.push(200); //shouldent be accecable
// // account1.movements.push(-20);

// account1.deposit(200);
// account1.withdraw(20);
// account1.requestLone(2000);
// // account1.approveLone(10); // shouldent be accecable
// console.log(account1);
// console.log(account1.getMovements);
// Account.helper();
// // account1.helper();

// //All are private variable and method
// // console.log(account1.#movements);
// // console.log(account1.#pin);
// // console.log(account1.#approveLone(100));

// //Chaining
// account1
//   .deposit(300)
//   .deposit(500)
//   .withdraw(100)
//   .requestLone(10000)
//   .withdraw(4000);

// console.log(account1.getMovements);

////////////////////////////////////////////////////
// lecture 23. ES6 Classes Summary
// ES6 Classes Summary

////////////////////////////////////////////////////
// lecture 24. Coding Challenge #4
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

class EV extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
// 'Rivian' going at 120 km/h, with a charge of 23%
const rivian = new EV('Rivian', 120, 23);
rivian.chargeBattery(90);
console.log(rivian);
// rivian.brake();
rivian.accelerate();

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .chargeBattery(50);

// class StudentCL extends PersonCL {
//   constructor(fullName, birthYear, course) {
//     //always need to happen first
//     super(fullName, birthYear);
//     //don't need this
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I am ${2021 - this.birthyear} years old. but i fell like i am ${
//         2021 - this.birthyear - 10
//       } years old`
//     );
//   }
// }
