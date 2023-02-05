Array.prototype.numberOfOccurrences = function(a) {
  return this.filter((x) => x === a).length;
}
