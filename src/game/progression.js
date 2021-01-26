import getRandomNumber from '../getRandomNumber.js';

export default class Prorgession {
  constructor() {
    this.description = 'What number is missing in the progression?';
  }

  createProgression() {
    this.startPoint = getRandomNumber(0, 50);
    this.progressionLength = getRandomNumber(5, 20);
    this.prorgessionStep = getRandomNumber(2, 50);
    this.missedPosition = getRandomNumber(0, this.progressionLength - 1);
    this.numbers = (new Array(this.progressionLength)
      .fill(''))
      .map(() => {
        this.startPoint += this.prorgessionStep;
        return this.startPoint;
      });
    this.correctAnswer = this.numbers[this.missedPosition];
    this.progressionToShow = this.numbers
      .map((e, i) => (i === this.missedPosition ? '..' : e));
  }

  sayDiscription() {
    console.log(this.description);
  }

  askQuestion() {
    this.createProgression();
    console.log(`Question: ${this.progressionToShow.join(' ')}`);
  }

  compareAnswer(answer) {
    return +answer === this.correctAnswer;
  }

  getCorrect() {
    return this.correctAnswer;
  }
}
