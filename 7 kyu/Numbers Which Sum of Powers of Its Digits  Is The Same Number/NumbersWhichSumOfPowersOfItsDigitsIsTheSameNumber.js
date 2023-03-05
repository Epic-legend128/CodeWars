function eqSumPowdig(hMax, exp) {
  let nums = [];
  for (let i = 2; i<=hMax; i++) {
    if (i.toString().split('').reduce((t, x) => t+parseInt(x)**exp, 0) == i) nums.push(i);
  }
  return nums;
}
