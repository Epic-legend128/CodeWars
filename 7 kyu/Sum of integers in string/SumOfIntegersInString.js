function sumOfIntegersInString(s) {
  let sum = 0;
  for (let i = 0; i<s.length; i++) {
    for ( ; (s[i] < '0' || s[i] > '9') && i < s.length; i++);
    let str = "";
    for ( ; s[i] >= '0' && s[i] <= '9' && i < s.length; i++) {
      str += s[i];
    }
    console.log(str);
    sum += Number(str);
  }
  return sum;
}
