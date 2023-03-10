function isPrime(number) {
  if (number%2 == 0) return number == 2;
  if (number <= 1) return false;
  for (let i = 3; i*i<=number; i++) {
    if (number%i == 0) return false;
  }
  return true;
}

function getPrimes(start, finish) {
  if (start > finish) return getPrimes(finish, start);
  let is_prime = new Array(finish+1).fill(true);
  let primes = [];
  is_prime[0] = false;
  is_prime[1] = false;
  for (let i = 2; i<=finish; i++) {
    if (is_prime[i]) {
      if (i >= start) primes.push(i);
      for (let j = i+i; j<=finish; j+=i) {
        is_prime[j] = false;
      }
    }
  }
  return primes;
}
