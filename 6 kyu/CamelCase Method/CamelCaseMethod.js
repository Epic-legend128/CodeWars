String.prototype.camelCase = function() {
  return this.length == 0 ? "" : this.split(' ').map(x => x[0].toUpperCase()+x.substring(1).toLowerCase()).join('');
}
