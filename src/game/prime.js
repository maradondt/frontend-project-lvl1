import getRandomNumber from '../getRandomNumber.js';
import isPrime from '../isPrime.js';

export default class Prime {
  constructor() {
    this.description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    this.numbers = (new Array(3)
      .fill(''))
      .map(() => getRandomNumber());
  }

  sayDiscription() {
    console.log(this.description);
  }

  askQuestion(index) {
    console.log(`Question: ${this.numbers[index]}`);
  }

  compareAnswer(answer, index) {
    return answer === this.getCorrect(index);
  }

  getCorrect(index) {
    return isPrime(this.numbers[index]) ? 'yes' : 'no';
  }
}
