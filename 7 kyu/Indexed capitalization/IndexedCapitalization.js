function capitalize(s, a){
  s = s.split('');
  a.forEach(x => {
    if (x < s.length)
      s[x] = s[x].toUpperCase();
  });
  return s.join('');
};
