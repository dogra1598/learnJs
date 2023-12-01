/*
    used to store various keyed collections and more complex entities. 
    
    Objects can be created using the "Object()" constructor or the "object initializer / literal syntax".
    ** If we create an obejct using constructor method (Object.create()) then the created obejct as singleton else it is not
*/

const mySym = Symbol("key1");

const jsUser = {
    firstName: "vishal",
    lastName: "dogra",
    "full name": "vishal dogra",
    location: "Palampur",
    email: "temp@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Friday"],
    [mySym]: "myKey1", // using symbol as a key
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "dummy@gmail.com";
// Object.freeze(jsUser); // to freeze an obejct so that no further chages after this
// jsUser.email = "dummy1@gmail.com"; // this will not reflect as jsUser is freezed
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello js user");
};

// console.log(jsUser.greeting); // [Function (anonymous)]
// console.log(jsUser.greeting());
/*
Hello js user
undefined
*/

jsUser.greeting2 = function () {
    console.log(`Hello js user, ${this["full name"]}`); // Hello js user, vishal dogra
    console.log(`Hello js user, ${this.firstName}`); // Hello js user, vishal
};
// console.log(jsUser.greeting2());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = new Object();

user.id = "45uy";
user.name = "vishal";
user.isLoggedIn = false;

// console.log(user);

const regularUSer = {
    email: "temp@gmail.com",
    fullName: {
        userFullName: {
            firstName: "vishal",
            lastName: "dogra",
        },
    },
};

// console.log(regularUSer.fullName?.userFullName.firstName); // vishal
// "?" called as "optional chanining", used in place of if-else

const obj1 = {
    1: "a",
    2: "b",
};
const obj2 = {
    3: "c",
    4: "d",
};
const obj3 = {
    5: "e",
    6: "f",
};

// const obj3 = Object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "temp1@gmail.com",
    },
    {
        id: 2,
        email: "temp2@gmail.com",
    },
    {
        id: 3,
        email: "temp3@gmail.com",
    },
];
// console.log(users[0].email); // temp1@gmail.com

// console.log(Object.keys(user)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(user)); // [ '45uy', 'vishal', false ]
// console.log(Object.entries(user)); // [ [ 'id', '45uy' ], [ 'name', 'vishal' ], [ 'isLoggedIn', false ] ]

// console.log(user.hasOwnProperty("isLoggedIn")); // true
// console.log(user.hasOwnProperty("isLogged")); // false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    courseName: "javascript",
    price: 999,
    courseInstructor: "dummy",
};

const { courseInstructor: instructor } = course;
// console.log(instructor); // dummy


