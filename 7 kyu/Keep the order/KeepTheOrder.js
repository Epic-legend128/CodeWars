function keepOrder(a, val) {
  let left = 0;
  let right = a.length-1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left+right)/2);
    if (a[mid] < val) left = mid+1;
    else if (left == mid) return mid;
    else right = mid;
  }
  return left;
}
