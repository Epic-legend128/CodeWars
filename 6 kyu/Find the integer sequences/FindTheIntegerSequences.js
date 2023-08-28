function findSequences(val) {
  if (val <= 2) return [];
  let sum = 0;
  let results = [];
  for (let i = 2; sum < val; i++) {
    sum = i*(i-1)/2;
    let add = (val-sum)/i;
    if (add == 0) break;
    if (add == Math.floor(add)) {
      let temp = [];
      for (let j = 0; j<i; j++) {
        temp.push(j+add);
      }
      results.push(temp);
    }
  }
  return results;
}