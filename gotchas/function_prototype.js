/* MyClass.prototype is not the same as Object.getPrototype(MyClass) */
'use strict';

function MyClass() {
   this.prop = 42;
}

var obj = new MyClass();
var objPrototype = Object.getPrototypeOf(obj);
var myClassPrototype = Object.getPrototypeOf(MyClass);

console.log(MyClass.prototype !== myClassPrototype);  // true
console.log(MyClass.prototype === objPrototype);      // true
console.log(myClassPrototype === Function.prototype); // true

