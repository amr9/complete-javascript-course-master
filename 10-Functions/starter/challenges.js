'use strict';
//challenge 1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  } else {
    console.log('I SEE NOTHING');
  }
};

poll.registerNewAnswer = function () {
  const answer = Number(
    prompt(
      `${this.question}\n ${this.options.join('\n')}\n(write option number)`
    )
  );

  if (answer > this.answers.length || answer < 0) {
    alert('The answer should be from 0 t0 3');
    poll.registerNewAnswer();
  }

  if (Number.isNaN(answer)) {
    alert('You entered a non number');
    poll.registerNewAnswer();
  }

  this.answers[answer] = 1;
  console.log(this.answers);
  //   this.displayResults();
  this.displayResults('string');
};

const clicker = poll.registerNewAnswer.bind(poll);

document.querySelector('.poll').addEventListener('click', clicker);

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
