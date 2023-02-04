function tribonacci(signature, n) {
  if (n == 0) return [];
  if (n < signature.length) return signature.filter((x, i) => i < n);
  var result = [...signature];
  for (let i = signature.length; i<n; i++) {
    let sum = 0;
    for (let j = 0; j<signature.length; j++) {
      sum += result[i-j-1];
    }
    result.push(sum);
  }
  return result;
}
