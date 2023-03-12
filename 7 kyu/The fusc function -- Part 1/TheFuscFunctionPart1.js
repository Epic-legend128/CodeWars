var f = {};
function fusc(n) {
  if (n <= 1) return n;
  if (f.hasOwnProperty(n)) return f[n];
  if (n%2 == 0) return fusc(n/2);
  f[n/2-0.5] = fusc(n/2-0.5);
  f[n/2+0.5] = fusc(n/2+0.5);
  return f[n/2-0.5] + f[n/2+0.5];
}
