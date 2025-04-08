export const sum = (a, b) => a + b;

export const sub = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => a / b;

export const expo = (a, b) => a ** b;

export const fizzBuzz = (n): (number | string)[] => {
  const fizzBuzzArray = [];
  for (let i = 1; i <= n; i++) {
    fizzBuzzArray.push(checkFixBuzz(i));
  }
  return fizzBuzzArray;
};

export const checkFixBuzz = (n: number): number | string => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return n;
  }
};
