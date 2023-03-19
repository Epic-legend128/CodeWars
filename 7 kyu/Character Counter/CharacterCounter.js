function validateWord(s) {
  let a = {};
  s = s.toLowerCase();
  s.split('').forEach(x => {
    if (!a.hasOwnProperty(x)) a[x] = 0;
    a[x]++;
  });
  return Object.keys(a).filter(x => a[x] == a[s[0]]).length == Object.keys(a).length;
}
