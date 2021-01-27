import { getRandomNumber } from '../cli.js';

const baseSings = ['*', '+', '-'];
const description = 'What is the result of the expression?';
const numbers = (new Array(3)
  .fill(''))
  .map(() => [getRandomNumber(0, 10), getRandomNumber(0, 50)]);
const sings = baseSings.map(() => baseSings[getRandomNumber(0, baseSings.length - 1)]);
const expressions = numbers
  .map(([elem1, elem2], i) => `${elem1} ${sings[i]} ${elem2}`);

const calcCorrectAnswer = (i) => {
  switch (sings[i]) {
    case '*':
      return numbers[i][0] * numbers[i][1];
    case '-':
      return numbers[i][0] - numbers[i][1];
    case '+':
      return numbers[i][0] + numbers[i][1];
    default:
      console.log('Error');
      return null;
  }
};

const calcGame = {
  sayDiscription() {
    console.log(description);
  },

  askQuestion(index) {
    console.log(`Question: ${expressions[index]}`);
  },

  compareAnswer(answer, index) {
    const correct = calcCorrectAnswer(index);
    return +answer === correct;
  },

  getCorrect(index) {
    return calcCorrectAnswer(index);
  },
};

export default calcGame;
