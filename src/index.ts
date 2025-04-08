import { Game } from './game.js';

const game = new Game();

game.roll(4);
game.roll(6);
console.log(game.score(), game.hadSpare);
