#include <cmath>
int next(int n) {
  if (n < 10) return n+n;
  int product = 1;
  int original = n;
  int len = log10(n);
  len = pow(10, len);
  int digit;
  for ( ; len >= 1; len /= 10) {
    digit = (int) n/len;
    if (digit != 0) {
      product *= digit;
      n -= digit*len;
    }
  }
  return product+original;
}

int convergence(int n) {
  int base = 1;
  int amount = 0;
  while (base != n) {
    if (n > base) {
      base = next(base);
    }
    else {
      n = next(n);
      amount++;
    }
  }
  return amount;
}
