function longestRepetition(s) {
  if (s.length == 0) return ['', 0];
  let amount = {};
  let mx = s[0];
  let i = 0;
  while (i<s.length) {
    let x = s[i];
    let c = i;
    if (!amount.hasOwnProperty(x)) amount[x] = 0;
    while (x == s[i] && i<s.length) i++;
    
    amount[x] = Math.max(amount[x], i-c);
    if (amount[x] > amount[mx]) mx = x;
  }
  return [mx,amount[mx]];
}
