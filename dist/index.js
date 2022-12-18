"use strict";
let id = 5;
let company = 'Travesry Media';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
x = true;
console.log('ID:', id);
let arr = [1, true, "Hello"];
let person = [1, 'Brad', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Brad'],
    [3, 'Jill']
];
//Union
let pid = 22;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
//Objects
// type User = {
//     id: number,
//     name: string
// }
// const user:User = {
//     id: 11,
//     name: 'John'
// }
// console.log(Direction1.Left)
//type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
    // age: number
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "one");
const mike = new Person(2, "two");
console.log(brad, mike);
console.log(brad.register());
//data modifiers
