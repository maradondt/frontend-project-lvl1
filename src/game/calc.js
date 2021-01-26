import getRandomNumber from '../getRandomNumber.js';

const sings = ['*', '+', '-'];

export default class CalcGame {
  constructor() {
    this.description = 'What is the result of the expression?';
    this.numbers = (new Array(3)
      .fill(''))
      .map(() => [getRandomNumber(0, 10), getRandomNumber(0, 50)]);
    this.sings = sings.map(() => sings[getRandomNumber(0, sings.length - 1)]);
    this.expressions = this.numbers
      .map(([elem1, elem2], i) => `${elem1} ${this.sings[i]} ${elem2}`);
  }

  sayDiscription() {
    console.log(this.description);
  }

  askQuestion(index) {
    console.log(`Question: ${this.expressions[index]}`);
  }

  calcCorrectAnswer(i) {
    switch (this.sings[i]) {
      case '*':
        return this.numbers[i][0] * this.numbers[i][1];
      case '-':
        return this.numbers[i][0] - this.numbers[i][1];
      case '+':
        return this.numbers[i][0] + this.numbers[i][1];
      default:
        console.log('Error');
        return null;
    }
  }
  // eslint-disable-next-line class-methods-use-this

  compareAnswer(answer, index) {
    const correct = this.calcCorrectAnswer(index);
    return +answer === correct;
  }

  getCorrect(index) {
    return this.calcCorrectAnswer(index);
  }
}
