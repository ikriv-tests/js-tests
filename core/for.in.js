/* for..in loop on an array skips empty slots, but not explicitly assigned 'undefined' values */
var root = [,1,,,2,,,,,3];
root[16] = 4;
root[11] = undefined;
   
for (var item in root) console.log('root['+item+']='+root[item]);
