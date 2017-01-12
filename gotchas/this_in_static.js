/* In a static method 'this' is defined and points to the class/function object */
class Foo {
    static get myClass() { return this; }
}

console.log(Foo.myClass === Foo);
