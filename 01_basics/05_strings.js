const firstName = "vishal";
const lastName = "dogra";

// console.log(firstName + " " + lastName); // vishal dogra

// strign interpolation
// console.log(`Hello ${firstName} ${lastName}`);

const gameName = new String("NFS Most Wanted");
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
/*
    String {'NFS Most Wanted'}
        0: "N"
        1: "F"
        2: "S"
        3: " "
        4: "M"
        5: "o"
        6: "s"
        7: "t"
        8: " "
        9: "W"
        10: "a"
        11: "n"
        12: "t"
        13: "e"
        14: "d"
        length: 15
        [[Prototype]]: String (methods available to String Object Wrapper)
        [[PrimitiveValue]]: "NFS Most Wanted"
*/

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // original value is not modified, new copy is created and then operation is performed
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t")); // gives index of 1st occurence of the give char or -1 if not found

const temp1 = gameName.substring(0, 7); // last index is not included
// console.log(temp1); // "NFS Mos"

// const temp2 = gameName.slice(0, 7);  // "NFS Mos"
const temp2 = gameName.slice(-15, 7); // "NFS Mos" (negative values are allowed)
// console.log(temp2);

const userName = "   vishal dogra   ";
// console.log(userName);   // "   vishal dogra   "
// console.log(userName.trim()); // "vishal dogra"

const url = "https://temp.com/vishal%20dogra";
// console.log(url.replace("%20", "-")); // "https://temp.com/vishal-dogra"
// console.log(url.includes("temp")); // true

console.log(gameName.split(" ")); // [ 'NFS', 'Most', 'Wanted' ]
