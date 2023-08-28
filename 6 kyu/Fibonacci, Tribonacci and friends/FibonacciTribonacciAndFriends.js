function Xbonacci(signature,n) {
  if (n <= signature.length) return signature.filter((x, i) => i<n);
  let sum = signature.reduce((t, x) => t+x, 0);
  let nums = [...signature];
  for (let i = signature.length; i<n; i++) {
    nums.push(sum);
    sum += sum - nums[i-signature.length];
  }
  return nums;
}