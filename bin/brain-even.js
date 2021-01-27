#!/usr/bin/env node
import Game from '../src/index.js';
import even from '../src/game/even.js';

const game = new Game(even);
game.start();
