import { getRandomNumber, gcd } from '../cli.js';

const description = 'Find the greatest common divisor of given numbers.';
const numbers = (new Array(3)
  .fill(''))
  .map(() => [getRandomNumber(1, 100), getRandomNumber(1, 100)]);

const gcdGame = {

  sayDiscription() {
    console.log(description);
  },

  askQuestion(index) {
    console.log(`Question: ${numbers[index].join(' ')}`);
  },

  compareAnswer(answer, index) {
    const correct = gcd(...numbers[index]);
    return +answer === correct;
  },

  getCorrect(index) {
    return gcd(...numbers[index]);
  },
};

export default gcdGame;
