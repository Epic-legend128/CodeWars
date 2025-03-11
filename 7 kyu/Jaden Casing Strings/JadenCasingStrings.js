Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this.split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join(' ');
   }
  }
);