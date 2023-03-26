function sortString(string,ordering) {
  ordering = ordering.split('').filter((x,i)=>i==ordering.split('').indexOf(x));
  return string.split('').sort((a,b) => {
    let c=ordering.indexOf(a)
    let d=ordering.indexOf(b);
    if (c == -1) return 1;
    if (d == -1) return -1;
    return c-d;
  }).join('');
}
