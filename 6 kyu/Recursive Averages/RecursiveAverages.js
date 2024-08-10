Object.prototype.average = function() {
    let sum = 0;
    for (let i = 0; i<this.length; i++) {
      sum += ((typeof this[i]) == "object" ? this[i].average() : parseFloat(this[i]));
    }
    return sum/this.length;
}