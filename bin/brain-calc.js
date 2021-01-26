import Game from '../src/index.js';
import Calc from '../src/game/calc.js';

const game = new Game(new Calc());
game.start();
