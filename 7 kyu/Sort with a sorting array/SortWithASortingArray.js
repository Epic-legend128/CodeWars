function sort(initialArray, sortingArray) {
  let r = [...initialArray];
  sortingArray.forEach((x, i) => r[x] = initialArray[i]);
  return r;
}
