function fib(n, bests = new Array(n+1).fill(-1)) {
  if (n < 2) return n;
  if (bests[n] != -1) return bests[n];
  bests[n] = fib(n-1, bests)+fib(n-2, bests);
  return bests[n];
}
