function nthFibo(n, bests = new Array(n+1).fill(-1)) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  if (bests[n] != -1) return bests[n];
  bests[n] = nthFibo(n-1, bests)+nthFibo(n-2, bests);
  return bests[n];
}
