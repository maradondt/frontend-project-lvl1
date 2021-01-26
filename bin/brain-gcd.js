#!/usr/bin/env node
import Game from '../src/index.js';
import Gcd from '../src/game/gcd.js';

const game = new Game(new Gcd());
game.start();
