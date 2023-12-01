"use strict"; // treat all JS code as newer version

/*
    2 category of data types:
        primitive (call by value)
            -- String, Number, Boolean, null, undefined, Symbol, BigInt
        Reference(Non-premitive) (call by reference)
            -- Object, Array, Functions
*/

/*
    Js has dynamic typing, i.e, we don't have to manually define the data type of the value stored in a variable. Instead data types are determined automatically.
    ** Note: Value has type, NOT variable


    7 PRIMITIVE DATA TYPES
    ======================

    Type            "typeof" return value           Object wrapper
    ======================================================================
    Null            "object"                        N/A
    Undefined       "undefined"                     N/A
    Boolean         "boolean"                       Boolean
    Number          "number"                        Number
    String          "string"                        String
    Symbol          "symbol"                        Symbol (ES6 0r ES2015)
    BigInt          "bigint"                        BigInt (ES2020)


    ** Note: "typeof" always return one of the 8 string values
             1. "object"
             2. "undefined"
             3. "boolean"
             4. "number"
             5. "string"
             6. "symbol"
             7. "bigint"
             8. "function"
*/

// console.log(typeof 123); // number
// console.log(typeof 12.45); // number
// console.log(typeof "hello"); // string
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

const score = 100;
const scodeValue = 100.5;
let isloggedIn = false;
let userEmail;
let temperature = null; // value is not undefined, intentionally setting value as null

const id1 = Symbol("123");
const id2 = Symbol("123");
// console.log(id1 === id2); // false

const bigNumber = 782364874632984023472390874n;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    Primitive data types uses "stack" memory
        -- here we get a new copy
    Reference data types uses "heap" memory
        -- here we get a reference
*/

let str1 = "temp";

// new copy of str1 is created
let str2 = str1;
str2 = "dummy";

console.log(str1);
console.log(str2);

let user1 = {
    email: "temp@gmail.com",
    upi: "user@ybl",
};

// reference of user1 is given to user2
let user2 = user1;
user2.email = "dummy@gmail.com";

console.log(user1.email);
console.log(user2.email);
