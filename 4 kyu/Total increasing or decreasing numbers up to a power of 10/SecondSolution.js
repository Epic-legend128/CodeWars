function totalIncDec(x){
  if (x == 0) return 1;
  let total = 10;
  let prev = [];
  for (let i = 10; i>0; i--) {
    prev.push(i);
  }
  for (let i = 1; i<x; i++) {
    let n = [1];
    for (let i = 8; i>=0; i--) {
      n.push(n[n.length-1] + prev[i]);
    }
    total += n[n.length-1];
    prev = n.reverse();
  }
  return total + prev[0] - x*10;
}