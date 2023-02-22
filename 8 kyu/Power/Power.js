function numberToPower(number, power){
  if (power == 0) return 1;
  if (power == 1) return number;
  if (power%2) return number*numberToPower(number, power-1);
  let a = numberToPower(number, power/2);
  return a*a;
}
