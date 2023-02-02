function add(n) {
  var next = function(x) {return add(x+n)};
  next.valueOf = function() {
    return n;
  }
  return next;
}
