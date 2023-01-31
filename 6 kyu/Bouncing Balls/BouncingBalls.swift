func bouncingBall(_ h: Double, _ bounce: Double, _ window: Double) -> Int {
  if (bounce <= 0 || bounce >= 1 || h <= 0 || window >= h) {
    return -1;
  }
  var count = 1
  var height = h*bounce
  while (height > window) {
    height=height*bounce;
    count = count+2;
  }
  return count;
}
