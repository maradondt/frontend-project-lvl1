import { getRandomNumber, isEven } from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const numbers = new Array(3).fill('').map(() => getRandomNumber());

const evenGame = {
  sayDiscription() {
    console.log(description);
  },

  askQuestion(index) {
    console.log(`Question: ${numbers[index]}`);
  },

  compareAnswer(answer, index) {
    return answer === 'yes' && isEven(numbers[index]) === true
      ? true
      : !!(answer === 'no' && isEven(numbers[index]) === false);
  },

  getCorrect(index) {
    return isEven(numbers[index]) ? 'yes' : 'no';
  },
};

export default evenGame;
