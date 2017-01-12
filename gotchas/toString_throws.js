/* For some objects, toString() will throw, although console.log works */
function *generator() { yield 42; }
var it = generator();
console.log(it.constructor); // "GeneratorFunction {}"
console.log(it.constructor.toString()); // TypeError: Function.prototype.toString is not generic
console.log(`Constructor: ${it.constructor}`);
