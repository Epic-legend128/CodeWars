function* gould() {
  let count = 0;
  while (true) {
    yield (count.toString(2).split('').filter(x=>x=='1')||[]).length;
    count++;
  }
}