'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//How to switch variables two different ways (destructing array is better for more than 2 variabls)

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

const [starter, course] = restaurant.order(2, 0);
console.log(starter, course);

//nested destruct
const nested = [6, 3, 6, [7, 9]];
// const [first, arrayNest] = [nested[0], nested[3]];
// console.log(first, arrayNest);

const [o, , , [p, l]] = nested;
console.log(o, p, l);
const [i, j, k] = [nested[0], nested[3][0], nested[3][1]];
console.log(i, j, k);

//default values

const [f = 1, g = 1, h = 1] = [8, 9];
console.log(f, g, h);

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b);
const { openingHours } = restaurant;
const {
  fri: { open: openers, close },
} = openingHours;

console.log(openers, close);
//spread sysntax bec ... is on the right side of the assign operator
const arr = [1, 2, ...[3, 4]];

//rest syntax bec ... is on the left side of the assingn operator
const [x, y, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(x, y, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const X = [23, 5, 7];
add(...X);

restaurant.orderPizza('mushrooms', 'onion', 'cheese', 'tomato');
restaurant.orderPizza('bruhs');

console.log(3 || 'Amr'); // 3
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'hello' || null); //hello

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La piazza',
  owner: 'Amr Emad',
};

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && 'nobody knows';
// rest1.owner = rest1.owner && 'nobody knows';

rest2.owner &&= 'nobody knows';
rest1.owner &&= 'nobody knows';

console.log(rest1);
console.log(rest2);
