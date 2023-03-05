function mergeStrings(first, second) {
  let count = second.length-Math.max(second.length-first.length, 0);
  for (let i = Math.max(first.length-second.length, 0); i<first.length; i++) {
    if (first.substring(i) == second.substring(0, count)) return first+second.substring(count);
    count--;
  }
  return first+second;
}
