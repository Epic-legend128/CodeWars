function validParentheses(parens) {
  let c = 0;
  for (let i = 0; i<parens.length; i++) {
    if (parens[i] == '(') c++;
    else c--;
    if (c < 0) return false;
  }
  return c==0;
}
