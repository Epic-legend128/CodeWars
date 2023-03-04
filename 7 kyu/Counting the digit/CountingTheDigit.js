function nbDig(n, d) {
  let s = "";
  for (let i = 0; i<=n; i++) {
    s += (i**2).toString();
  }
  return s.split('').filter(x => x==d).length;
}
