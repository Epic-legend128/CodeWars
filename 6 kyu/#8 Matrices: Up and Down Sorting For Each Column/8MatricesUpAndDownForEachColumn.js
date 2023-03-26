function upDownColSort(matrix) {
  let r = [];
  for (let i = 0; i<matrix.length; i++) {
    for (let j = 0; j<matrix[i].length; j++) r.push(matrix[i][j]);
  }
  r.sort((a, b) => a-b);
  
  let index = 0;
  for (let i = 0; i<matrix[0].length; i++) {
    for (let j = 0; j<matrix.length; j++) {
      if (i%2) matrix[matrix.length-j-1][i] = r[index];
      else matrix[j][i] = r[index];
      index++;
    }
  }
  return matrix;
}
