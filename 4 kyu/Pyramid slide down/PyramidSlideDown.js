function longestSlideDown (pyramid) {
  var sums = [...pyramid];
  for (let i = 0; i<pyramid.length; i++) {
      for (let j = 0; j<pyramid[i].length; j++) {
          let a=0, b=0;
          if (i-1 >= 0 && j+1 < pyramid[i].length) a = sums[i-1][j];
          else a = 0;
          if (i-1 >= 0 && j-1 >= 0) b = sums[i-1][j-1];
          else b = 0;
          sums[i][j] = pyramid[i][j] + (a > b ? a : b);
      }
  }
  let mx = 0;
  for (let i = 0; i<pyramid[pyramid.length-1].length; i++) {
      mx = mx < pyramid[pyramid.length-1][i] ? pyramid[pyramid.length-1][i] : mx;
  }
  return mx;
}
