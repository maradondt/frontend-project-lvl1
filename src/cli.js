import readlineSync from 'readline-sync';

const dialog = (question) => readlineSync.question(question);

const getRandomNumber = (from = 0, to = 100) => Math.round(from + (Math.random() * to));

const isEven = (num) => num % 2 === 0;

export { getRandomNumber, dialog, isEven };
