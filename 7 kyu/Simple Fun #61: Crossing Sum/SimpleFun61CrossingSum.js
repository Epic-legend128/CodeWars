function crossingSum(matrix, a, b) {
  let sum = matrix[a].reduce((t,x) => t+x, 0) - matrix[a][b];
  for (let i = 0; i<matrix.length; i++) {
    sum += matrix[i][b];
  }
  return sum;
}
