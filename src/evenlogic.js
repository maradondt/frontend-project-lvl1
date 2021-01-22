import readlineSync from 'readline-sync';
import greetings from './cli.js';

const getRandomNumber = () => Math.round((Math.random() * 100));

const isEven = (num) => num % 2 === 0;

const answerQuestion = (num) => {
  console.log(`Question: ${num}`);
};

const answerIsCorrect = (answer, num) => (answer === 'yes' && isEven(num) === true ? true : !!(answer === 'no' && isEven(num) === false));

const sayNonCorrect = (answer, num, name) => {
  const correct = isEven(num) === true ? 'yes' : 'no';
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.
  Let's try again, ${name}!`);
};

export default function game() {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const rundomNumber = getRandomNumber();
    answerQuestion(rundomNumber);
    const answer = readlineSync.question('Your answer: ');
    if (answerIsCorrect(answer, rundomNumber) === true) {
      i += 1;
      console.log('Correct');
    }
    if (!answerIsCorrect(answer, rundomNumber)) {
      sayNonCorrect(answer, rundomNumber, userName);
      i = 0;
    }
  }
  console.log(`Congratulations, ${userName}`);
}
