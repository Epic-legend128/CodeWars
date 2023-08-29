function sumOfSquares(n) {
  if (Number.isInteger(Math.sqrt(n))) return 1;
  
  for (let i = 1; i*i<=n+1; i++) {
    if (Number.isInteger(Math.sqrt(n-(i*i)))) return 2;
  }
  
  while (!(n%4)) n >>= 2;
  
  return (n-7)%8 ? 3 : 4;
}