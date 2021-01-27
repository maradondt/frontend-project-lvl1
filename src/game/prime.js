import { getRandomNumber, isPrime } from '../cli.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numbers = (new Array(3)
  .fill(''))
  .map(() => getRandomNumber());
const primeGame = {
  sayDiscription() {
    console.log(description);
  },

  askQuestion(index) {
    console.log(`Question: ${numbers[index]}`);
  },

  compareAnswer(answer, index) {
    return answer === primeGame.getCorrect(index);
  },

  getCorrect(index) {
    return isPrime(numbers[index]) ? 'yes' : 'no';
  },
};

export default primeGame;
