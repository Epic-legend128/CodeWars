function decode(code, n) {
  let r = "";
  let k = n.toString();
  for (let i = 0; i<code.length; i++) {
    r += String.fromCharCode(96+code[i]-parseInt(k[i%k.length]));
  }
  return r;
}
