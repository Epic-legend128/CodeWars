function getCount(str) {
  const v = ['a', 'e', 'o', 'u', 'i'];
  return str.split('').filter((x) => v.join('').includes(x)).reduce((t) => t+1, 0)
}
