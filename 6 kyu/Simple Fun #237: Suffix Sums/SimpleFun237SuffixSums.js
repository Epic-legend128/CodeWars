function suffixSums(a) {
  let r = [];
  for (let i = a.length-1; i>=0; i--) {
    r.push((r[r.length-1]||0) + (a[i]||0));
  }
  return r.reverse();
}
