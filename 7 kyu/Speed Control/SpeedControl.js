function gps(s, x) {
  if (x.length == 0) return 0;
  let a = [...x];
  for (let i = 1; i<x.length; i++) a[i] = x[i] - x[i-1];
  return parseInt(Math.max(...a.map(y => (y*3600/s))));
}