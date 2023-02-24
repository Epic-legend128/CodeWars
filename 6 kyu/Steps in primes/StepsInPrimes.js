function sieveOfEratosthenes(lower, upper) {
    var isPrime = [];
    for (let i = 0; i<=upper; i++) isPrime.push(true);
    isPrime[0] = false;
    isPrime[1] = false;
    var primes = [];
    for(let i = 2; i<=upper; i++) {
        if (isPrime[i]) {
            if (i >= lower) primes.push(i);
            for (let j = i*2; j<=upper; j+=i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime;
}

function step(g, m, n) {
  let isPrime = sieveOfEratosthenes(m, n);
  for (let i = m; i<=n-g; i++) {
    if (isPrime[i] && isPrime[i+g]) return [i, i+g];
  }
  return null;
}
