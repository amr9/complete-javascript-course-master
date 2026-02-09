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

const personClEx = class {};

class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new personCl('jessica davis', 1996);

console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === personCl.prototype);

const account = {
  owner: 'amr',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
    console.log(this.movements);
  },
};

console.log(account.latest);
account.latest = 900;

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
//when creating class like this it it will be class and prototype
const steven = Object.create(PersonProto);

console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__ === PersonProto);

// there is no prototype for personproto bec it is the prototype
console.log(PersonProto.prototype);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);

sarah.calcAge();
