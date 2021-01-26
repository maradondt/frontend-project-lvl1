export default function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
