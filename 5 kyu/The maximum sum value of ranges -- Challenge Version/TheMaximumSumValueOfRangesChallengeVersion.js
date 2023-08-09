const maxSum = (arr,range) => {
  for (let i = 1; i<arr.length; i++) {
    arr[i] += arr[i-1];
  }
  return Math.max(...range.map(x => arr[x[1]]-(x[0] > 0 ? arr[x[0]-1] : 0)));
}