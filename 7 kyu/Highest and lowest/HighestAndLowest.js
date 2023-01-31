function highAndLow(numbers){
  var nums = numbers.split(" ");
  var mx = -Number.MAX_VALUE;
  var mn = Number.MAX_VALUE;
  nums.forEach((x) => {
    if (mn > parseInt(x)) mn = x;
    if (mx < parseInt(x)) mx = x;
  });
  return mx+" "+mn;
}
