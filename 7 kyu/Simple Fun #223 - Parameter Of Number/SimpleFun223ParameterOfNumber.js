function gcd(a, b) {
  if (a%b == 0) return b;
  if (a < b) return gcd(b, a);
  return gcd(b, a%b);
}

function parameter(n) {
  let g = gcd(a=((h=n.toString().split('')).reduce((t, x) => t+parseInt(x), 0)), b=(h.reduce((t, x) => t*parseInt(x), 1)));
  return a/g*b;
}