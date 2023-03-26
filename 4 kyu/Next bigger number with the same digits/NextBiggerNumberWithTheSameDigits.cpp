#include <cmath>
using namespace std;

long long power(long long base, long long exp) {
  if (exp == 0) return 1;
  if (exp == 1) return base;
  if (exp%2 == 0) {
    long long half = power(base, exp/2);
    return half*half;
  }
  return power(base, exp-1) * base;
}

long long nextBigger(long long n) {
  string s = to_string(n);
  if (s.length() == 1) return -1;
  long long digits[s.length()];
  for (int i = 0; i<s.length(); i++) {
    digits[i] = (int) s[i] - '0';
  }
  next_permutation(digits, digits+s.length());
  long long r = 0;
  for (int i = 0; i<s.length(); i++) {
    r += power(10, s.length()-i-1)*digits[i];
  }
  if (r <= n) return -1;
  return r;
}
