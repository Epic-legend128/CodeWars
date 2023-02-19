std::vector<int> bubbleSortOnce(const std::vector<int> &input)
{
  std::vector<int> nums = input;
  for (int i = 0; i<nums.size()-1; i++) {
    if (nums[i] > nums[i+1]) {
      int temp = nums[i];
      nums[i] = nums[i+1];
      nums[i+1] = temp;
    }
  }
  return nums;
}
