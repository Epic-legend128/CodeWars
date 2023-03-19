Array.range = function(start, count) {
  return new Array(count).fill(0).map((x, i) => start+i);
}

Array.prototype.sum = function() {
  return this.reduce((t, x) => t+x, 0);
}
