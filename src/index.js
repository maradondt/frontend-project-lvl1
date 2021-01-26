import dialog from './cli.js';

export default class Game {
  constructor(gameMod) {
    // this.name;
    this.gameMod = gameMod;
    this.answers = [];
  }

  setName() {
    this.name = dialog('May I have your name? ');
  }

  greetings() {
    console.log('Welcome to Brain Games!');
    this.setName();
    console.log(`Hello ${this.name}`);
  }

  setAnswer() {
    this.lastAnswer = dialog('Your answer: ');
  }

  sayWin() {
    console.log(`Congratulations, ${this.name}!`);
  }

  sayLoose() {
    console.log(`Let's try again, ${this.name}!`);
  }

  // eslint-disable-next-line class-methods-use-this
  sayCorrect() {
    console.log('Correct!');
  }

  sayNonCorrect(correct) {
    console.log(`'${this.lastAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  }

  start() {
    this.greetings();
    this.gameMod.sayDiscription();
    let i = 0;
    while (i < 3) {
      this.gameMod.askQuestion(i);
      this.setAnswer();
      if (this.gameMod.compareAnswer(this.lastAnswer, i)) {
        this.sayCorrect();
        i += 1;
      } else {
        this.sayNonCorrect(this.gameMod.getCorrect(i));
        break;
      }
    }
    if (i === 3) {
      this.sayWin();
    } else {
      this.sayLoose();
    }
  }
}
