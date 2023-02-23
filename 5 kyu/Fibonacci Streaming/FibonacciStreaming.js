function* fibonacciSequence() {
  let a = 1n;
  let b = 1n;
  let nums = [1n, 1n];
  yield(1n);
  yield(1n);
  while (true) {
    a += b;
    b = a-b;
    yield(BigInt(a));
  }
}
