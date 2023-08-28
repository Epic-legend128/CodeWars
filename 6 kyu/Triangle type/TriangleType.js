function triangleType(a, b, c){
  if (a >= b+c || b >= a+c || c >= a+b) return 0;
  if ((mx=(Math.max(a, b, c)**2)) > (mn=(Math.min(a, b, c)**2)) + (md=(Math.max(Math.min(a, b), Math.min(a, c), Math.min(b, c))**2))) return 3;
  if (mx < mn+md) return 1;
  return 2;
}