function mergeArrays(arr1, arr2) {
  let r = [];
  let a = 0, b = 0;
  if (arr1[0] > arr1[1]) arr1.reverse();
  if (arr2[0] > arr2[1]) arr2.reverse();
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] <= arr2[b]) r.push(arr1[a++]);
    else r.push(arr2[b++]);
  }
  
  for ( ; a < arr1.length; a++) r.push(arr1[a]);
  for ( ; b < arr2.length; b++) r.push(arr2[b]);
  
  return Array.from(new Set(r));
}
