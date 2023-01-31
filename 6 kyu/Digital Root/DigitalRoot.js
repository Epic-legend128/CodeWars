function digitalRoot(num) {
  if (num < 10) return num;
  let n = num.toString().split("");
  return digitalRoot(n.reduce((t, x) => t+parseInt(x), 0));
}
