function round(a) {
  return Math.round(a*10000000000)/10000000000;
}

function secDegSolver(a, b, c){
  if (a == 0) {
    if (b != 0 && c != 0)
      return "It is a first degree equation. Solution: "+round(-c/b);
    if (b == 0 && c == 0)
      return "The equation is indeterminate";
    if (b == 0)
      return "Impossible situation. Wrong entries";
    return "It is a first degree equation. Solution: 0";
  }
  let d = b*b - 4*a*c;
  if (d < 0) return "There are no real solutions";
  if (d == 0) return "It has one double solution: "+round(-b/(2*a));
  return "Two solutions: "+[round((-b+Math.sqrt(d))/(2*a)), round((-b-Math.sqrt(d))/(2*a))].sort().join(", ");
}