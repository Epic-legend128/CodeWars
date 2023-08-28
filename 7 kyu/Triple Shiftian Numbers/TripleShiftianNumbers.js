function tripleShiftian(base,n) {
  if (n < 3) return base[n];
  let current = 0;
  n -= 2;
  while (n--) {
    base.push(base[2]*4 - 5*base[1] + base[0]*3);
    base.splice(0, 1);
  }
  return base[2];
}