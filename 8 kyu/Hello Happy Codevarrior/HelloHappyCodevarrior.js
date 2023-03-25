class Warrior {
  constructor(n) {
    this.n = n;
  }
  
  name(a="") {
    if (a=="") return this.n;
    this.n = a
    return a;
  }
  
  toString() {
    return "Hi! my name's "+this.name();
  }
}
