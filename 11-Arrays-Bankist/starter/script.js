'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// //slice Return new array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //shallow copy
// //splice Mutate the original array
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// //reverse Mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //join
// console.log(letters.join(' - '));

// const array = [23, 11, 64];
// console.log(array[0]);
// console.log(array.at(0));

// console.log(array[array.length - 1]);
// console.log(array.slice(-1)[0]);
// console.log(array.at(-1));

// console.log('AMR'.at(0));
// console.log('AMR'[0]);

// for (const str of movements) {
//   console.log(str > 0 ? `you deposit ${str}` : `you withraw ${Math.abs(str)}`);
// }

// console.log('----------');

// movements.forEach(function (str) {
//   console.log(str > 0 ? `you deposit ${str}` : `you withraw ${Math.abs(str)}`);
// });

// for (const [i, str] of movements.entries()) {
//   console.log(
//     str > 0
//       ? `movement ${i + 1}: you deposit ${str}`
//       : `movement ${i + 1}: you withraw ${Math.abs(str)}`
//   );
// }
// console.log('----------');
// movements.forEach(function (str, i, arr) {
//   console.log(
//     str > 0
//       ? `movement ${i + 1}: you deposit ${str}`
//       : `movement ${i + 1}: you withraw ${Math.abs(str)}`
//   );
// });

// currencies.forEach();

const euroToUsd = 1.1;
const movementsUsd = movements.map(mov => mov * euroToUsd);
console.log(movements, movementsUsd);

const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * euroToUsd);
}
console.log(movementsUsdfor);
const movementDescription = movements.map(
  (mov, i, arr) =>
    `movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementDescription);

const deposits = movements.filter((mov, i) => mov > 0);
console.log(deposits);

const depositsfor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsfor.push(mov);
  }
}
console.log(depositsfor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
