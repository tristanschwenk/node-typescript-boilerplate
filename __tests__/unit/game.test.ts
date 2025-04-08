import { describe, it, expect } from 'vitest';
import { Game } from '../../src/game.js';

describe('Testing the game class', () => {
  const game = new Game();

  it('should return the score of the game at the beginning, being 0', () => {
    expect(game.score()).toBe(0);
  });

  it('should return the score of the game after rolling a 6', () => {
    game.roll(6);
    expect(game.score()).toBe(6);
  });

  it('should have passed to the next step', () => {
    expect(game.step).toBe(1);
  });

  it('should return the score of the game and being a spare after rolling a 4', () => {
    game.roll(4);
    expect(game.score()).toBe(10);
    expect(game.hadSpare).toBe(true);
  });

  it('should have passed to the new frame and step 0', () => {
    expect(game.frame).toBe(1);
    expect(game.step).toBe(0);
  });

  it('should have added the bonus from the previous spare', () => {
    game.roll(6);
    expect(game.score()).toBe(22);
  });
});
