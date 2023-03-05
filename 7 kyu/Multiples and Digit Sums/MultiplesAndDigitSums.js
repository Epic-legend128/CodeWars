function procedure(n){
  let r = 0;
  for (let i = 1; i<=100; i++) {
    if (i%n == 0) r += i.toString().split('').reduce((t, x) => t+parseInt(x), 0);
  }
  return r;
}
