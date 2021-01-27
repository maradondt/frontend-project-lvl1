import { getRandomNumber } from '../cli.js';

const description = 'What number is missing in the progression?';

const createProgression = () => {
  let startPoint = getRandomNumber(0, 50);
  const progressionLength = getRandomNumber(5, 20);
  const prorgessionStep = getRandomNumber(2, 50);
  const missedPosition = getRandomNumber(0, progressionLength - 1);
  const numbers = (new Array(progressionLength)
    .fill(''))
    .map(() => {
      startPoint += prorgessionStep;
      return startPoint;
    });
  const correctAnswer = numbers[missedPosition];
  const progressionToShow = numbers
    .map((e, i) => (i === missedPosition ? '..' : e));
  return { progressionToShow, correctAnswer };
};

const progressionGame = {
  state: {},

  sayDiscription() {
    console.log(description);
  },

  askQuestion() {
    progressionGame.state = createProgression();
    console.log(`Question: ${progressionGame.state.progressionToShow.join(' ')}`);
  },

  compareAnswer(answer) {
    return +answer === progressionGame.state.correctAnswer;
  },

  getCorrect() {
    return progressionGame.state.correctAnswer;
  },
};

export default progressionGame;
