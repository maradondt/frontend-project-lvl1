#!/usr/bin/env node
import Game from '../src/index.js';
import Progression from '../src/game/progression.js';

const game = new Game(new Progression());
game.start();
