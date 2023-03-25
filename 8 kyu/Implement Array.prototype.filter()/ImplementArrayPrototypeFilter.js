Array.prototype.filter = function (func) {
  let l = [];
  this.forEach(x => {
    if (func(x)) l.push(x);
  });
  return l;
}
