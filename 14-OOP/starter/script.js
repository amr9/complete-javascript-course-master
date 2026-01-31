'use strict';

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this for methode making
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const amr = new Person('amr', 2000);

console.log(amr);

const ramez = new Person('ramez', 2002);

console.log(ramez instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

amr.calcAge();

console.log(amr.__proto__);

console.log(amr.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(amr));
console.log(Person.prototype.isPrototypeOf(ramez));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(amr);

console.log(amr.hasOwnProperty('firstName'));
console.log(amr.hasOwnProperty('species'));

console.log(amr.__proto__.__proto__);
console.log(amr.__proto__.__proto__.__proto__);

console.log(Person.__proto__.constructor);
console.dir(Person.__proto__.constructor);

const array = [1, 2, 3, 3, 2, 5, 8, 4, 3, 1];
console.log(array.__proto__);
console.log(array.__proto__ === Array.prototype);
console.log(array.__proto__.__proto__); //object here bec of __proto__ is object

// adding new methode in Array ProtoType called unique
// "not a good idea to do this it just for learning"
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(array.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
