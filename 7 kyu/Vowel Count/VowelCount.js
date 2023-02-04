function getCount(str) {
  return str.split('').filter((x) => "aeuio".includes(x)).reduce((t) => t+1, 0)
}
