import getRandomNumber from '../getRandomNumber.js';

export default class EvenGame {
  constructor() {
    this.description = 'Answer "yes" if the number is even, otherwise answer "no".';
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

  // eslint-disable-next-line class-methods-use-this
  isEven(num) {
    return num % 2 === 0;
  }

  compareAnswer(answer, index) {
    return (answer === 'yes' && this.isEven(this.numbers[index]) === true ? true : !!(answer === 'no' && this.isEven(this.numbers[index]) === false));
  }

  getCorrect(index) {
    return this.isEven(this.numbers[index]) ? 'yes' : 'no';
  }
}
