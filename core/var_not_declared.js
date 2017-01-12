/* Behavior of not delcared variable in strict mode */
'use strict';
console.log(typeof notDeclared==="undefined"); // prints true
console.log(notDeclared===undefined); // ReferenceError