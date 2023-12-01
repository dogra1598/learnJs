let score1 = "33";
// console.log(typeof score1);  // string
// console.log(typeof(score1)); // string

let value1 = Number(score1);
// console.log(typeof value1);  // number
// console.log(value1); // 33

// =================================================================

let score2 = "33abc";

let value2 = Number(score2);
// console.log(typeof value2);  // number
// console.log(value2);    // NaN

// console.log(isNaN(value2)); // true

// ==================================================================

let score3 = null;

let value3 = Number(score3);
// console.log(typeof value3); // number
// console.log(value3);    // 0

// ==================================================================

let score4 = undefined;

let value4 = Number(score4);
// console.log(typeof value4); // number
// console.log(value4);    // NaN

// ==================================================================

let score5 = true;

let value5 = Number(score5);
// console.log(typeof value5); // number
// console.log(value5);    // 1 for true, 0 for false

// ==================================================================

/*
    "33"        ==>     33
    "33abc"     ==>     NaN
    true        ==>     1
    false       ==>     0
    null        ==>     0
    undefined   ==>     NaN
*/

// ==================================================================

let isLoggedIn = undefined;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

/*
    1           ==>     true
    0           ==>     false
    ""          ==>     false
    "abc"       ==>     true
    null        ==>     false
    undefined   ==>     false
*/

// ==================================================================

let num = 33;

let stringNum = String(num);
console.log(typeof stringNum); // string
console.log(stringNum); // "33"
