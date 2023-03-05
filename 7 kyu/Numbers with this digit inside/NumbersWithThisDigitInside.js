function numbersWithDigitInside(x, d) {
  let count = 0;
  let sum = 0;
  let product = 1;
  for (let i = 1; i<=x; i++) {
    if (i.toString().includes(d.toString())) {
      count++;
      sum += i;
      product *= i;
    }
  }
  return [count, sum, count > 0 ? product : 0];
}
