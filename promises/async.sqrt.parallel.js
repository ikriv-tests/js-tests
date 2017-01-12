/* Calculate sqrt of several numbers in parallel using promises */
'use strict';
function asyncSqrt(x) {
    return new Promise(function(resolve,reject) {
         var delay = Math.random() * 5000;
         setTimeout( ()=> {
             if (x>=0) {
                 resolve(Math.sqrt(x));
             } else {
                 reject("Invalid argument: sqrt expects a non negative number");
             }
         }, delay);
    });
}

var args = process.argv.slice(2);
if (args.length == 0) {
    console.log("Usage: async_sqrt_parallel n1 n2 n3...");
    return;
}
console.log("Calculating sqrt of " + args + "...");

Promise.all( args.map( arg=>asyncSqrt(arg).then( 
    result => console.log(`sqrt(${arg})=${result}`), 
    error => console.log(`sqrt(${arg})=ERROR! ${error}`)))); 