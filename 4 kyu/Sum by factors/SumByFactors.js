function isPrime(num) {
    if (num <= 1) return false;
    if (num%2==0) return num==2;
    for (let i = 3; i*i<=num; i+=2) {
        if (num%i==0) return false;
    }
    return true;
}

function primeFactors(n) {
  let current = n;
  let factors = [];
  for (let i = 2; i<=n; i++) {
    if (isPrime(i) && current%i==0) {
      factors.push(i);
      current /= i;
    }
  }
  return factors;
}

function sumOfDivided(lst) {
  let factors = [];
  for (let i = 0; i<lst.length; i++) {
    factors.push(primeFactors(Math.abs(lst[i])));
  }
  
  let result = [];
  for (let i = 0; i<lst.length; i++) {
    for (let j = 0; j<factors[i].length; j++) {
      let sum = 0;
      for (let k = 0; k<lst.length; k++) {
        for (let w = 0; w<factors[k].length; w++) {
          if (factors[i][j] == factors[k][w]) {
            sum += lst[k];
            if (k != i) {
                factors[k].splice(w, 1);
                w--;
            }
          }
        }
      }
      result.push([factors[i][j], sum]);
    }
  }
  return result.sort((a, b) => {return a[0]-b[0];});
}
