import { describe, it, expect } from 'vitest';
import { divide, expo, multiply, sub, sum } from '../../src/main.js';

describe('SUM function', () => {
  // Assert if setTimeout was called properly
  it('should add two numbers', async () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
  });

  it('should return 0', async () => {
    const res = sum(0, 0);
    expect(res).toBe(0);
  });

  it('should return -2', async () => {
    const res = sum(1, -3);
    expect(res).toBe(-2);
  });
});

describe('SUB function', () => {
  // Assert if setTimeout was called properly
  it('should subtract two numbers', async () => {
    const res = sub(1, 2);
    expect(res).toBe(-1);
  });

  it('should return 0', async () => {
    const res = sub(0, 0);
    expect(res).toBe(0);
  });

  it('should return 4', async () => {
    const res = sub(1, -3);
    expect(res).toBe(4);
  });
});

describe('MULT function', () => {
  // Assert if setTimeout was called properly
  it('should multiply two numbers', async () => {
    const res = multiply(3, 2);
    expect(res).toBe(6);
  });

  it('should return 0', async () => {
    const res = multiply(0, 0);
    expect(res).toBe(0);
  });

  it('should return -6 when multiplying a positive and negative number', async () => {
    const res = multiply(2, -3);
    expect(res).toBe(-6);
  });
});

describe('DIVIDE function', () => {
  // Assert if setTimeout was called properly
  it('should multiply two numbers', async () => {
    const res = divide(40, 2);
    expect(res).toBe(20);
  });

  it('should return 0', async () => {
    const res = divide(0, 1);
    expect(res).toBe(0);
  });

  it('should return -6 when multiplying a positive and negative number', async () => {
    const res = divide(20, -2);
    expect(res).toBe(-10);
  });
});

describe('EXPO function', () => {
  // Assert if setTimeout was called properly
  it('should expo the first number by the second', async () => {
    const res = expo(2, 3);
    expect(res).toBe(8);
  });

  it('should return 0, expo 0 = 1', async () => {
    const res = expo(3, 0);
    expect(res).toBe(1);
  });
});
