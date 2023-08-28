function getMatrixProduct(a, b) {
  if (a[0].length != b.length) return null;
  if (a.length == 1 && b.length == 1) return [[a[0]*b[0]]];
  let results = [];
  for (let i = 0; i<a.length; i++) {
    let temp = [];
    for (let j = 0; j<b[0].length; j++) {
      temp.push(0);
    }
    results.push(temp);
  }
  
  for (let i = 0; i<a.length; i++) {
    for (let j = 0; j<b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k<b.length; k++) {
        sum += a[i][k]*b[k][j];
      }
      results[i][j] = sum;
    }
  }
  return results;
};