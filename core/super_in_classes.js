/* keyword 'super' in a class points to the instance of base class */
class Base {
   constructor(n) { this.x = n }
   get id() { return "Base"; }
   square() { return this.x * this.x }
}

var b = new Base(8);
console.log(b.square());

class Derived extends Base {
    cube() { return this.x * this.square(); }
    get id() { return "Derived extends " + super.id; }
}

var d = new Derived(8);
console.log(d.cube());

console.log(d.id);

