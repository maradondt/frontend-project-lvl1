import { dialog } from './cli.js';

const game = {
  setName() {
    game.name = dialog('May I have your name? ');
  },

  greetings() {
    console.log('Welcome to Brain Games!');
    game.setName();
    console.log(`Hello, ${game.name}!`);
  },

  setAnswer() {
    game.lastAnswer = dialog('Your answer: ');
  },

  sayWin() {
    console.log(`Congratulations, ${game.name}!`);
  },

  sayLoose() {
    console.log(`Let's try again, ${game.name}!`);
  },

  // eslint-disable-next-line class-methods-use-this
  sayCorrect() {
    console.log('Correct!');
  },

  sayNonCorrect(correct) {
    console.log(`'${game.lastAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  },

  start(gameMod) {
    game.greetings();
    gameMod.sayDiscription();
    let i = 0;
    while (i < 3) {
      gameMod.askQuestion(i);
      game.setAnswer();
      if (gameMod.compareAnswer(game.lastAnswer, i)) {
        game.sayCorrect();
        i += 1;
      } else {
        game.sayNonCorrect(gameMod.getCorrect(i));
        break;
      }
    }
    if (i === 3) {
      game.sayWin();
    } else {
      game.sayLoose();
    }
  },
};

export default game;
