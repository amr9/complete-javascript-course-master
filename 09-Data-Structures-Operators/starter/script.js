'use strict';
const weekdays = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
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

const openingHours = {
  [weekdays[5]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[0]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

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
  openingHours,
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

const {
  starterMenu: starters = [],
  menu = [...starters, ...restaurant.mainMenu],
} = restaurant;

console.log(menu, starters);

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b);
// const { openingHours } = restaurant;
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

const { sat, ...weekdayss } = openingHours;
console.log(weekdayss);

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

for (const item of menu) {
  console.log(item);
}
for (const [index, element] of menu.entries()) {
  console.log(index, element);
}
console.log(menu.entries());
console.log(...menu.entries());
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//optional chaining
console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open);
const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'no work';
  console.log(day, open);
}

//chaining for methods
console.log(restaurant.order?.(0, 1) ?? "method doesn't exist");
console.log(restaurant.orderrisotto?.(0, 1) ?? "method doesn't exist");
//arrays
const users = [{ name: 'amr' }];

console.log(users[0]?.name ?? "user don't exist");
console.log(users[4]?.name ?? "user don't exist");

//property names
const properties = Object.keys(openingHours);
console.log(properties);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//property values
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
console.log(entries);

//key and object --> object/  key and value -->arrays
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

//sets
const orderSet = new Set([
  'pizza',
  'pasta',
  'risotto',
  'pasta',
  'risotto',
  'pizza',
  'pizza',
]);

console.log(orderSet);
console.log(typeof orderSet);

console.log(orderSet.size);
console.log(orderSet.has('pizza'));

orderSet.add('garlic bread');
orderSet.add('garlic bread');
orderSet.delete('risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('intersection:: ', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('fusion :', italianMexicanFusion);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
for (const food of uniqueMexicanFoods) {
  console.log('uniques of both', uniqueItalianFoods.add(food));
}
console.log('spread of sets', ...uniqueMexicanFoods);
const uniqueItalianFoodsAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianFoodsAndMexicanFoods);

console.log(mexicanFoods.isDisjointFrom(italianFoods));

//maps
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'firenze italy');
console.log(rest.set(2, 'lisbon'));

//chaining maps
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 23;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

console.log('deletion of key "2"', rest.delete(2));
const array12 = [1, 2];
rest.set(array12, 'test');
// rest.clear();
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

console.log(rest.get(array12));

const question = new Map([
  ['question', 'what is the best language?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);
//convert object to map
console.log(Object.entries(openingHours));
const hoursmap = new Map(Object.entries(openingHours));
console.log(hoursmap);
//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

//convert map to array
console.log(...question);
