function evenBinary(n) {
  let nums = n.split(' ').map(x => parseInt(x, 2));
  let indexes = [];
  nums.forEach((x,i) => {
    if (x%2 == 0) indexes.push(i);
  });
  let sorted = nums.filter(x => x%2==0).sort((a,b) => a-b);
  indexes.forEach((x,i) => {
    nums[x] = sorted[i];
  });
  return nums.map(x => ((s=x.toString(2)).length == 1 ? "00"+s:s.length==2?"0"+s:s)).join(' ');
}
