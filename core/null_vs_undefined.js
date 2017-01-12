/* Comparison between null and undefined under various circumstances */
var nullVar = null;

console.log(typeof nullVar === "object"); // true
console.log(nullVar === null);            // true
console.log(nullVar === undefined);       // false
console.log(nullVar == undefined);        // true
console.log(1+null); //NaN
console.log(1+undefined); // undefined
