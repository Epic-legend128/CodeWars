function twoSum(numbers, target) {
  let nums = {};
  numbers.forEach((x, i) => {
    nums[x] = i;
  });
  
  for (let i = 0; i<numbers.length; i++) {
    if (nums.hasOwnProperty(target-numbers[i]) && i != nums[target-numbers[i]]) return [i, nums[target-numbers[i]]];
  }
}
