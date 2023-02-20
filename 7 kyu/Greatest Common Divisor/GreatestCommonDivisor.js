function mygcd(x,y){
  if (x < y) return mygcd(y, x);
  if (x%y == 0) return y;
  return mygcd(y, x%y);
}
