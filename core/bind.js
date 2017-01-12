// Unlike c# delegates, JS methods do not carry 'this' pointer with them, 
// which makes callbacks difficult; one has to use bind() to achieve the desired effect
'use strict';

var obj = {
   x: 10,
   y: 20,
   sum: function() { return this.x + this.y; }
};

function exec(action) {
    var x = 100, y = 500;
    return action();
}

console.log("Function call: " + obj.sum()); // direct call, works as expected
console.log("Unbound callback: " + exec(obj.sum)); // NaN in not strict mode, reference error in strict mode
console.log("Bound callback: " + exec(obj.sum.bind(obj))); // works as expected


