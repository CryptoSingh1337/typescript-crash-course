// Basic data types
let id: number = 10;
let str: string = 'Hello world';
let isPositive: boolean = false;
let a: any = 'Can hold any data type';
let ids: number[] = [1, 2, 3, 4];

// Tuple - only take data in the specified order
let person: [number, string, boolean] = [1, 'John', true];

// Tuple array
let employee: [number, string][] = [
    [1, 'John'],
    [2, 'Jack']
];

// Union - can hold more than one type
let union: number | string = 10;
union = 'This is union';

// Enum
enum Directions {
    UP = 'UP', DOWN = 'DOWN', RIGHT = 'RIGHT', LEFT = 'LEFT'
};

console.log(Directions.RIGHT);

// Objects
type User = {
    id: number,
    name: string
};

const user: User = {
    id: 1,
    name: 'John'
};

// Type Assertion
let cid: any = 1;
// let customerId = <number> cid;
let customerId = cid as number;
// customerId = 'customer id' // gives error because it can only hold number

// Functions
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(1, 2));

// Void
function log(message: string | number): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    id: number,
    name: string
}

const anotherUser: UserInterface = {
    id: 1,
    name: 'Jack'
};

console.log(anotherUser.name)

// Interfaces with function
interface MathFunction {
    (a: number, b: number): number
}

const add: MathFunction = (a: number, b: number): number => a + b;
const subtract: MathFunction = (a: number, b: number): number => a - b;

console.log(add(5, 5));
console.log(subtract(10, 5));

// Classes

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register(): string {
        return `${this.name} is now registered`;
    }
}

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(2, 'Sam', 'Developer');
console.log(emp);
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

const numArray = getArray<number>([1, 2, 3]);
const strArray = getArray<string>(['1', '2', '3']);