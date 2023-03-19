function validParentheses(parenStr) {
  let c = 0;
  for (let i = 0; i<parenStr.length; i++) {
    let x = parenStr[i];
    c += (x == '(' ? 1 : -1);
    if (c < 0) return false;
  }
  return c == 0;
}
