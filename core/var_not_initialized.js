/* Behavior of a not initialized variable */
'use strict'
var notInitialized;
console.log(typeof notInitialized==="undefined"); // true
console.log(notInitialized===undefined);          // true