function sumTwoSmallestNumbers(nums) {  
  var mn2 = Number.MAX_VALUE;
  var mn = Number.MAX_VALUE;
  nums.forEach((x) => {
    if (mn > x) {
      mn2 = mn;
      mn = x;
    }
    else if (mn2 > x) mn2 = x;
  });
  return mn+mn2;
}
