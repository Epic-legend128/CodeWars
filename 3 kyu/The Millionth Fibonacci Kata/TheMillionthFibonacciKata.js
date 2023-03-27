const multiply = (h1, h2) => [[h1[0][0]*h2[0][0]+h1[0][1]*h2[1][0], h1[0][0]*h2[0][1]+h1[0][1]*h2[1][1]], [h1[1][0]*h2[0][0]+h1[1][1]*h2[1][0], h1[1][0]*h2[0][1]+h1[1][1]*h2[1][1]]];

function power(matrix, exp) {
  if (exp <= 1n) return matrix;
  if (exp%2n == 0n) {
    let half = power(matrix, exp/2n);
    return multiply(half, half);
  }
  return multiply(power(matrix, exp-1n), matrix);
}


function fib(n) {
  n = BigInt(n);
  if (n < 0n) {
    if (-n%2n == 0n) return -fib(-n)
    else return fib(-n);
  }
  if (n == 0n) return 0n;
  if (n <= 2n) return 1n;
  if (n == 3n) return 2n;
  var matrix = [[1n, 1n], [1n, 0n]];
  var exp = n-3n;
  
  var r = power(matrix, exp);
  return r[0][0]+r[0][1]+r[1][0]+r[1][1];
}
