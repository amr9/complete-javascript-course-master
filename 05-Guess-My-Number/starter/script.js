'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scored = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function conditon(score, guess, secretNumber) {
  if (score > 1) {
    displayMessage(`${guess > secretNumber ? 'Too high' : 'Too low'}`);
    scored--;
    document.querySelector('.score').textContent = scored;
  } else {
    displayMessage('You lost the game');
    document.querySelector('.score').textContent = 0;
  }
}

function correct(score, highscore) {
  displayMessage('Correct number');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
    highscore = score;
  }
}

function reset() {
  scored = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scored;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
}

//button check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    correct(scored, highscore);
  } else {
    conditon(scored, guess, secretNumber);
  }
});

//button again
document.querySelector('.again').addEventListener('click', function () {
  reset();
});
