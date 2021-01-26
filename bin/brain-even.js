#!/usr/bin/env node
import Game from '../src/index.js';
import Even from '../src/game/even.js';

const game = new Game(new Even());
game.start();
