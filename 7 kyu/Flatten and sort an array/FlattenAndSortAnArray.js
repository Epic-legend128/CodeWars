function flattenAndSort(array) {
  let r = [];
  array.forEach(x => {
    x.forEach(y => {
      r.push(y);
    });
  });
  
  return r.sort((a, b) => a-b);
}
