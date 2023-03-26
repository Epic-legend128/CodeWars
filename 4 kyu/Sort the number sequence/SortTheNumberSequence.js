function sortSequence(sequence){
  let r = [];
  let temp = [];
  sequence.forEach(x => {
    if (x == 0) {
      r.push(temp);
      temp = [];
    }
    else {
      temp.push(x);
    }
  });
  r.map((x,i) => x.sort((a,b) => a-b));
  for (let i = 0; i<r.length; i++) r[i].unshift(i);
  r.sort((a, b) => {
    let c = a.reduce((t, x) => t+x, 0)-a[0];
    let d = b.reduce((t, x) => t+x, 0)-b[0];
    if (c != d) return c-d;
    return a[0]-b[0];
  });
  let result = [];
  r.forEach(x => {
    x.forEach((y,i) => {
      if (i > 0) result.push(y);
    });
    result.push(0);
  });
  return result;
}
