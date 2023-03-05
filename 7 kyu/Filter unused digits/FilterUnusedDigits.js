function unusedDigits(...nums) {
  let d = new Array(10).fill(-1).map((x, i) => x=i);
  nums = nums.join('').split('');
  for (let i = 0; i<nums.length; i++) {
    d[parseInt(nums[i])] = -1;
  }
  return d.filter((x) => x!=-1).join('');
}
