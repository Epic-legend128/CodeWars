function convertHashToArray(hash){
  return Object.keys(hash).map((x) => [x, hash[x]]).sort();
}
