#!/usr/bin/env node
import Game from '../src/index.js';
import Prime from '../src/game/prime.js';

const game = new Game(new Prime());
game.start();
