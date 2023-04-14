function sumOfThrees(n) {
  let p = n.toString(3);
  let r = [];
  for (let i = 0; i<p.length; i++) {
    let current = p[i];
    if (current == '1')
      r.push("3^"+(p.length-i-1));
    else if (current != '0')
      return 'Impossible';
  }
  return r.join('+');
}
