function pairZeros(arr) {
  let f = false;
  let a = [];
  arr.forEach((x) => {
    if (x != 0)
      a.push(x);
    else if (!f) {
      a.push(x);
      f = true;
    }
    else
      f = false;
  });
  return a;
}
