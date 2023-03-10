function isPrime(num) {
  if (num%2 == 0) return num == 2;
  if (num <= 1) return false;
  for (let i = 3; i*i<=num; i++) {
    if (num%i == 0) return false;
  }
    return true;
}
