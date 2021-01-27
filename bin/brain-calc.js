#!/usr/bin/env node
import Game from '../src/index.js';
import calc from '../src/game/calc.js';

const game = new Game(calc);
game.start();
