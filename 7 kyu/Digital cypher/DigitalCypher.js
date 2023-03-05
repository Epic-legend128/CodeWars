function encode(str,  n) {
  let r = [];
  let k = n.toString();
  for (let i = 0; i<str.length; i++) {
    r.push(str.charCodeAt(i)-96+parseInt(k[i%k.length]));
  }
  return r;
}
