/*
    In Js, arrays are not primitives but are "Array objects"
    characteristics:
    1. resisizable and can contain a mix of different data types
    2. elements must be accessed using non-negative integers and are zero indexed
    3. copy operations on array create a shallow copy
    ** shallow copy of an object is a copy whoes properties share the same references as those of the source object from which the copy was made

*/

// const myArr = [0, 1, 2, 3, 4, true, "temp"];
// const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[0]); // 0
// console.log(myArr[6]); // "temp"

const nums = [1, 2, 3, 4, 5];
// Array methods

// nums.push(6); // [ 1, 2, 3, 4, 5, 6 ]
// nums.push(7); // [ 1, 2, 3, 4, 5, 6, 7 ]
// nums.pop(); // [ 1, 2, 3, 4, 5, 6 ]

// nums.unshift(9); // [ 9, 1, 2, 3, 4, 5 ], inserts element at the start of array
// nums.shift(); // [ 2, 3, 4, 5 ], remove element from the start of array

// console.log(nums.includes(4)); // true, boolean value
// console.log(nums.indexOf(9)); // -1
// console.log(nums.indexOf(4)); // 3

// const newArr = nums.join("-");
// console.log(newArr); // 1-2-3-4-5, string

// slice & splice
// console.log("A: ", nums); // A:  [ 1, 2, 3, 4, 5 ]

// const nums2 = nums.slice(1, 3);
// console.log(nums2); // [2, 3]
// console.log("B: ", nums); // B: [1, 2, 3, 4, 5]

// const nums3 = nums.splice(1, 3);
// console.log(nums3); // [2, 3, 4]
// console.log("C: ", nums); // C:  [ 1, 5 ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvelHeros = ["ironman", "thor", "spiderman"];
const dcHeros = ["batman", "superman", "flash"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // [ 'ironman', 'thor', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); // // [ 'ironman', 'thor', 'spiderman', [ 'batman', 'superman', 'flash' ] ], concat returns new array

// spread opreator
const allHeros = [...marvelHeros, ...dcHeros];
// console.log(allHeros); // [ 'ironman', 'thor', 'spiderman', 'batman', 'superman', 'flash' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flattnedArray = anotherArray.flat(Infinity);
// console.log(flattnedArray); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("vishal")); // false
// console.log(Array.from("vishal")); // [ 'v', 'i', 's', 'h', 'a', 'l' ]
// console.log(Array.from({ name: "vishal" })); // [ ], returns empty array when unable to create array

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
