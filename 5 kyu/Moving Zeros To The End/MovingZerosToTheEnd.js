function moveZeros(arr) {
  let a = arr.filter((x) => x!==0);
  let zeroes = arr.filter((x) => x===0).length;
  for (let i = 0; i<zeroes; i++) a.push(0);
  return a;
}
