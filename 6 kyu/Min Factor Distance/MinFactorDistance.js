function factorization(n) {
  let num = n;
  let f = [1];
  let f2 = [n];
  for (let i = 2; i*i<=num; i++) {
    if (num%i == 0) {
      f.push(i);
      if (i*i != num) f2.push(num/i);
    }
  }
  return [...f, ...f2.reverse()];
}

function minDistance(n) {
  let factors = factorization(n);
  let dist = Infinity;
  for (let i = 0; i<factors.length-1; i++) {
    if (factors[i+1]-factors[i] < dist) dist = factors[i+1]-factors[i];
  }
  
  return dist;
}