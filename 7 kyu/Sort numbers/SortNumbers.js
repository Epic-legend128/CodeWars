function solution(nums){
  return nums == null || nums == [] ? [] : nums.sort((a,b) => a-b);
}
