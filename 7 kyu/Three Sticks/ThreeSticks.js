function maxlen(l1, l2) {
  console.log(l1 + " " + l2);
  if (l1 < l2) {
    let temp = l1;
    l1 = l2;
    l2 = temp;
  }
  
  if (l1 >= 3*l2) return l1/3;
  
  if (l1 >= 2*l2) return l2;
  
  return l1/2;
}