/* Using promises to perform deferred calculations of sqrt */
'use strict';
function asyncSqrt(x) {
    return new Promise(function(resolve,reject) {
         setTimeout( ()=> {
             if (x>=0) {
                 resolve(Math.sqrt(x));
             } else {
                 reject("Invalid argument: sqrt expects a non negative number");
             }
         }, 3000);
    });
}

var arg = process.argv[2];
if (arg === undefined) {
    console.log("Usage: async_sqrt number");
    return;
}

console.log("Calculating sqrt of " + arg + "...");

asyncSqrt(arg).then( 
    result => console.log(result), 
    error => console.log("ERROR! " + error)); 