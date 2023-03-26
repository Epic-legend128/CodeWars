function solve(arr){
  let fre = {};
  arr.forEach(x => {
    if (!fre.hasOwnProperty(x)) fre[x] = 0;
    fre[x]++;
  });
  return arr.sort((a, b) => {
    if (fre[a] == fre[b]) return a-b;
    return fre[b]-fre[a];
  });
}
