class Primes {
  static * stream() {
    var isPrime = [];
    for (let i = 0; i<=16000000; i++) isPrime.push(true);
    isPrime[0] = false;
    isPrime[1] = false;
    let total = 0;
    for(let i = 2; total < 1000020; i++) {
      if (isPrime[i]) {
        yield(i)
        total++;
        for (let j = i*2; j<=16000000; j+=i) {
          isPrime[j] = false;
        }
      }
    }
  }
}
