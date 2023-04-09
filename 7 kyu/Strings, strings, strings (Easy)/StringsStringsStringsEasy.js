// Recover toString() here :)
Boolean.prototype.toString = function() {
  return this ? "true": "false";
}

Number.prototype.toString = function() {
  return ""+this.valueOf();
}


Array.prototype.toString = function() {
  return "["+this.join(', ')+"]";
}
