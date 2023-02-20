var primeList = function (upper) {
  var isPrime = [];
  for (let i = 0; i<=upper; i++) isPrime.push(true);
  isPrime[0] = false;
  isPrime[1] = false;
  var primes = [];
  for(let i = 2; i<=upper; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i*2; j<=upper; j+=i) {
        isPrime[j] = false;
      }
    }
  }
  return primes;
}
