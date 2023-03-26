function sortByBit(arr) {
  return arr.sort((a, b) => {
    let c = a.toString(2).split('').filter(x => x=='1').length;
    let d = b.toString(2).split('').filter(x => x=='1').length
    if (c == d) return a-b;
    return c-d;
  });
}
