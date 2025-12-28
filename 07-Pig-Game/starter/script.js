'use strict';
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');
const scoreText0 = document.querySelector('#score--0');
const scoreText1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const playSection0 = document.querySelector('.player--0');
const playSection1 = document.querySelector('.player--1');

let score = 0;
let total = [0, 0];
let activePlayer = 0;
diceImage.classList.add('hidden');

const clickBtnNew = function () {
  scoreText0.textContent = '0';
  scoreText1.textContent = '0';
  currentScore0.textContent = '0';
  currentScore1.textContent = '0';
  playSection0.classList.add('player--active');
  playSection1.classList.remove('player--active');
  playSection0.classList.remove('player--winner');
  playSection1.classList.remove('player--winner');
  diceImage.classList.add('hidden');
  total = [0, 0];
  activePlayer = 0;
};

const clickBtnRoll = function () {
  if (total[activePlayer] < 100) {
    let random = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `dice-${random}.png`;
    diceImage.classList.remove('hidden');
    if (random === 1) {
      document.querySelector(`#score--${activePlayer}`).textContent = '0';
      score = 0;

      activePlayer = activePlayer === 0 ? 1 : 0;
      playSection0.classList.toggle('player--active');
      playSection1.classList.toggle('player--active');
    } else {
      score += random;
      document.querySelector(`#score--${activePlayer}`).textContent = score;
    }
  }
};

const clickBtnHold = function () {
  if (score !== 0 && total[activePlayer] < 100) {
    console.log(score);
    total[activePlayer] += score;
    document.querySelector(`#current--${activePlayer}`).textContent =
      total[activePlayer];
    document.querySelector(`#score--${activePlayer}`).textContent = '0';
    score = 0;
    diceImage.classList.add('hidden');
    if (total[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    }
  }
};

btnNew.addEventListener('click', clickBtnNew);
btnRoll.addEventListener('click', clickBtnRoll);
btnHold.addEventListener('click', clickBtnHold);
