function arithmeticSequenceElements(a, d, n) {
	let r = [];
  for (let i = 0; i<n; i++) {
    r.push(a);
    a += d;
  }
  return r.join(', ');
}
