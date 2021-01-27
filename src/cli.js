import readlineSync from 'readline-sync';

const dialog = (question) => readlineSync.question(question);

const getRandomNumber = (from = 0, to = 100) => Math.round(from + (Math.random() * to));

const isEven = (num) => num % 2 === 0;

const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  getRandomNumber, dialog, isEven, gcd, isPrime,
};
