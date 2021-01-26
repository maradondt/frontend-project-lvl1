import getRandomNumber from '../getRandomNumber.js';
import gcd from '../gcd.js';

export default class GcdGame {
  constructor() {
    this.description = 'Find the greatest common divisor of given numbers.';
    this.numbers = (new Array(3)
      .fill(''))
      .map(() => [getRandomNumber(1, 100), getRandomNumber(1, 100)]);
  }

  sayDiscription() {
    console.log(this.description);
  }

  askQuestion(index) {
    console.log(`Question: ${this.numbers[index].join(' ')}`);
  }

  compareAnswer(answer, index) {
    const correct = gcd(...this.numbers[index]);
    return +answer === correct;
  }

  getCorrect(index) {
    return gcd(...this.numbers[index]);
  }
}
