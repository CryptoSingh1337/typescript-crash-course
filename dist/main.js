"use strict";
let id = 10;
let str = 'Hello world';
let isPositive = false;
let a = 'Can hold any data type';
let ids = [1, 2, 3, 4];
let person = [1, 'John', true];
let employee = [
    [1, 'John'],
    [2, 'Jack']
];
let union = 10;
union = 'This is union';
var Directions;
(function (Directions) {
    Directions["UP"] = "UP";
    Directions["DOWN"] = "DOWN";
    Directions["RIGHT"] = "RIGHT";
    Directions["LEFT"] = "LEFT";
})(Directions || (Directions = {}));
;
console.log(Directions.RIGHT);
const user = {
    id: 1,
    name: 'John'
};
let cid = 1;
let customerId = cid;
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(1, 2));
function log(message) {
    console.log(message);
}
const anotherUser = {
    id: 1,
    name: 'Jack'
};
console.log(anotherUser.name);
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(5, 5));
console.log(subtract(10, 5));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'Sam', 'Developer');
console.log(emp);
console.log(emp.register());
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3]);
const strArray = getArray(['1', '2', '3']);
