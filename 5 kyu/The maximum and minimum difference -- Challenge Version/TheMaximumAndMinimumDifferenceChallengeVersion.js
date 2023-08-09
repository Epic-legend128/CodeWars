function maxAndMin(arr1,arr2){
  arr1.sort((a, b) => a-b);
  arr2.sort((a, b) => a-b);
  
  let mx = Math.max(Math.abs(arr1[arr1.length-1]-arr2[0]), Math.abs(arr2[arr2.length-1]-arr1[0]));
  
  let mn = Infinity;
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length && mn > 0) {
    let dist = Math.abs(arr1[i]-arr2[j]);
    if (dist < mn) mn = dist;
    if (arr1[i] > arr2[j])
      j++;
    else
      i++;
  }
  return [mx, mn];
}