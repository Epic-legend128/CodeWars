function getSlope(p1, p2) {
  return p2 == p1 ? Infinity : (p2[0]-p1[0] != 0) ? (p2[1]-p1[1])/(p2[0]-p1[0]) : null;
}
