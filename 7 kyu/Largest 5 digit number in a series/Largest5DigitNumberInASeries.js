function solution(digits) {
  let mx = -1;
  for (let i = 0; i<=digits.length-5; i++) {
    if (parseInt(digits.substring(i, i+5)) > mx) mx = parseInt(digits.substring(i, i+5));
  }
  return mx;
}
