multiplicationTable = function(size) {
  return new Array(size).fill(0).map((x, i) => new Array(size).fill(0).map((a, b) => (b+1)*(i+1)));
}
