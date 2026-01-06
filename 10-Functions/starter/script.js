'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 555);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';
// const amr = {
//   name: 'Amr Emad',
//   passport: 235122645,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'MR. ' + passenger.name;
//   if (passenger.passport === 235122645) {
//     alert('check in');
//   } else alert('wrong');
// };
// checkIn(flight, amr);
// console.log(flight);
// console.log(amr);

// const newPassPort = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000);
// };

// newPassPort(amr);
// checkIn(flight, amr);
// console.log(amr);

//higher order function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transformer('javaScript is the best !', upperFirstWord);
transformer('javaScript is the best !', oneWord);

const high5 = function () {
  console.log('✋');
};

document.body.addEventListener('click', high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetarr = greeting => name => console.log(`${greeting} ${name}`);

greet('hi')('amr');
greetarr('hello')('amr');

// const addTax = function (rate, value) {
//   return value + value * rate;
// };

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addTax(0.1, 100));

const tax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const vat = tax(0.23);
console.log(vat(100));
