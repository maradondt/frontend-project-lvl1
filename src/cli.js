import readlineSync from 'readline-sync';

export default function dialog(question) {
  return readlineSync.question(question);
}
