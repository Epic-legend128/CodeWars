var fact = {};

function factorial(n) {
  if (fact.hasOwnProperty(n)) return fact[n];
  if (n <= 1) return 1;
  fact[n] = factorial(n-1) * n;
  return fact[n];
}

const sumFactorial = arr => arr.reduce((t, x) => t + factorial(x), 0);
