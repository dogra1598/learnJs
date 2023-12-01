let myDate = new Date();

// console.log(myDate); // 2023-12-01T17:14:06.475Z

// console.log(typeof myDate); // "obejct"

// console.log(myDate.toString()); // Fri Dec 01 2023 22:44:44 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString()); // 2023-12-01T17:16:23.065Z

// console.log(myDate.toUTCString()); // Fri, 01 Dec 2023 17:16:23 GMT

// console.log(myDate.toLocaleString()); // 12/1/2023, 10:46:23 PM

// console.log(myDate.toLocaleDateString()); // 12/1/2023

// console.log(myDate.toLocaleTimeString()); // 10:46:23 PM

// console.log(myDate.toDateString()); // Fri Dec 01 2023

// let myCreatedDate = new Date(2023, 0, 25); // Wed Jan 25 2023, months starts from 0
// let myCreatedDate = new Date(2023, 0, 25, 5, 3); // 1/25/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-15"); // 1/15/2023, 5:30:00 AM, here month starts from 1
let myCreatedDate = new Date("01-15-2023"); // 1/15/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1701451401641, millsecond
// console.log(myCreatedDate.getTime()); // 1673721000000

// console.log(Math.floor(Date.now() / 1000)); // 1701451526, seconds

const newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate()); // 1
// console.log(newDate.getDay()); // 5 ==> Friday
// console.log(newDate.getMonth()); // 11 ==> December (months starts from 0)

console.log(
    newDate.toLocaleString("default", {
        weekday: "long",
    })
); // Friday
