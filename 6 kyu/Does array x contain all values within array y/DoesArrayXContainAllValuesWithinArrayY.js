Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
  return a.filter((x) => !this.includes(x)).length == 0;
} } );
