function geometricSequenceElements(a, r, n){
  let elements = [];
  for (let i = 0; i<n; i++) {
    elements.push(a);
    a *= r;
  }
  return elements.join(', ');
}
