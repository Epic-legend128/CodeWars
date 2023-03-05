function explode(s) {
  let r = "";
  s.split('').forEach(x => {
    r += new Array(parseInt(x)).fill(x).join('');
  });
  return r;
}
