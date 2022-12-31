let readLineSync = require('readline-sync');

const userName = readLineSync.question(`What's your name? `);
console.log(`Welcome ${userName}\n`);

function play(question, answer) {
  let userAnswer = readLineSync.question(question);
  let score = 0;

  if (userAnswer === answer) {
    score++;
    console.log('Correct!\n');
  }
  else console.log('Incorrect!');
  return score;
}

const questions = [
  {
    question: `Where Do I live? `,
    answer: 'Kazhakuttam'
  },
  {
    question: `My Favorite SuperHero would be? `,
    answer: 'Bharghavaram'
  }
];

function start(array) {
  let score = 0;
  for (let obj of array)
    score += play(obj.question, obj.answer);
  console.log(`\nYour Score: ${score}\n----------`);
}

start(questions);
