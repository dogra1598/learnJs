// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// ================================================================================

// ** make sure when doign any type of comparision data types must be same some times result is unpredictible
// console.log("2" > 1); // true
// console.log("02" > 1); // true

// ================================================================================

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
/*
    equality check == and comparisions > < >= <= work differently
    comparisions convert null to number, treating it as 0
    that is why 3rd log is true and 1st log is false
*/

// ================================================================================

// === strict check, checks value as well as data type
console.log("2" === 2); // false
