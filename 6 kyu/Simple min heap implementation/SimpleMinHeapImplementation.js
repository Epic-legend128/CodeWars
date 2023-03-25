class MinHeap {
  constructor() {
    this.node = [];
  }
}

MinHeap.prototype.push = function(a) {
  this.node.push(a);
  this.node.sort((a, b) => b-a);
}

MinHeap.prototype.pop = function(){
  return this.node.pop();
}
