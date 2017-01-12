/*
Variable "dead" is in temporal dead zone; 
Any access to it, including typeof causes a ReferenceError
*/
console.log(declaredLater===undefined);        // true
console.log(typeof notDeclared==="undefined"); // true
console.log(typeof dead);                      // ReferenceError

var declaredLater = 42;
let dead;