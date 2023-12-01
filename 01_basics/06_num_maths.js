const score = 400;
// console.log(score);

const balance = new Number(500);
// console.log(balance);

// console.log(balance.toString().length);  // 3

// console.log(balance.toFixed(2)); // 500.00

const num = 54.7689;
// console.log(num.toPrecision(3)); // 54.8

const num2 = 1000000;
// console.log(num2.toLocaleString("en-IN")); // 10,00,000

// console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE);  // 5e-324

// console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER);   // -9007199254740991

// ++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4)); // 4

// console.log(Math.round(4.5)); // 5

// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.7)); // 4

// console.log(Math.min(4, 2, 5, 6)); // 2
// console.log(Math.max(4, 2, 5, 6)); // 6

// console.log(Math.random()); // value lies between [0, 1)
// console.log(Math.floor((Math.random() * 10) + 1));  // value lies between [1, 10)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // value lies between [10, 20)
