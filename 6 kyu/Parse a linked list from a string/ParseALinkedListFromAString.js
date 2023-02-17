function parse(string) {
  let nums = string.split(" -> ");
  var result = null;
  while (nums.length > 0) {
    if (nums[nums.length-1] != "null") {
      result = new Node(parseInt(nums[nums.length-1]), result);
    }
    nums.splice(nums.length-1, 1);
  }
  return result;
}
