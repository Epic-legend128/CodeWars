var sums = {};

function isPrime(n) {
  if (n <= 1) return false;
  if (n%2 == 0) return n==2;
  for (let i = 3; i*i<=n; i+=2) {
    if (n%i == 0) return false;
  }
  return true;
}

function factorization(n) {
  let r = [];
  let c = n;
  for (let i = 2; c != 1; i++) {
    if (isPrime(i)) {
      while(c%i == 0) {
          r.push(i);
          c /= i;
      }
    }
  }
  return r;
}

function sumFactors(n) {
  if (sums.hasOwnProperty(n)) return sums[n];
  sums[n] = factorization(n).reduce((t,x) =>t+x);
  return sums[n];
}

function factorSum(n) {
  let sum = sumFactors(n);
  if (sum == sumFactors(sum)) return sum;
  return factorSum(sum);
}
