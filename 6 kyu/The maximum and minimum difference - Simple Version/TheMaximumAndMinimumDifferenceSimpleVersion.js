function maxAndMin(arr1,arr2){
  let mx = Math.max(Math.abs(arr1.sort((a,b) => a-b)[arr1.length-1]-arr2.sort((a,b)=>a-b)[0]), Math.abs(arr2[arr2.length-1] - arr1[0]));
  let mn = Infinity;
  for (let i = 0; i<arr1.length && mn > 0; i++) {
    for (let j = 0; j<arr2.length && mn > 0; j++) {
      let dist = Math.abs(arr1[i]-arr2[j]);
      if (mn > dist) {
        mn = dist;
      }
    }
  }
  return [mx, mn];
}