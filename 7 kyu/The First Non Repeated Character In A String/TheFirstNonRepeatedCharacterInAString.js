function firstNonRepeated(s) {
  return s.split('').filter((x, i) => !s.substring(0, i).split('').includes(x) && !s.substring(i+1).split('').includes(x))[0] || null;
}
