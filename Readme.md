# Typescript Crash Course

Typescript is just a superset of javascript. It basically introduce the static types in the javascript but it is not fully statically type.

## Setup

Install typescript package globally
```bash
npm i -g typescript
```

Compile typescript file
```bash
tsc main.ts
```

Or

```bash
tsc
```

Watch changes in a file
```bash
tsc --watch main.ts
```

or 

```bash
tsc --watch
```

## Typescript configuration

Create `tsconfig.json`
```bash
tsc --init
```

## Basic types
|Type|Syntax|
|----|------|
|number|`a: number = 10`|
|string|`a: string = 'Hello world'`|
|boolean|`a: boolean = true`|
|any|`a: any = 10`|

## Other types
|Type|Syntax|
|----|------|
|array|`a: [] = [1, 2, 3, 4, 5]`|
|tuple|`a: [number, string] = [1, 'John']`|
|array of tuple|`a: [number, string][] = [[1, 'John'], [2, 'Jack']]`|
|union|`a: number | string = 10 or '10'`|
|enum|`enum Directions { UP, DOWN, RIGHT, LEFT }`|

### Type
These can be defined with the help of `type` or `interface`.
`type` can be used with primitives as well as with unions.

```typescript
type User = {
    id: number,
    name: string
}

type Point = number | string

const x: Point = 1;
```

## Type Assertion
If a variable is of type `any` and we want to only take it as number then we can use type assertion.

```typescript
let cid: any = 1

let customerId = <number> cid
let customerId = cid as number
```

## Functions
We can specify parameter type and the return type.

```typescript
function addNumbers(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}
```

## Interface
Use to define a custom types. We cannot use union with `interface` it is only possible with `type`.

```typescript
interface User {
    readonly id: number,
    name: string,
    age?: number // optional
}

const user: User = {
    id: 1,
    name: 'John'
}
```

### Interface with Functions

```typescript
interface MathFunction {
    (a: number, b: number): number
}

const addFunction: MathFunction = (a: number, b: number): number => a + b
```

## Class
Same as JS but now we can add access modifiers (public by default, protected, private).

```typescript
class Person {
    private id: number
    protected name: string
    public age: number

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register(): string {
        return `${this.name} is now registered`;
    }
}
```

### Implement Interface

```typescript
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
```

### Inheritance
```typescript
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
```
## Generics
Use to define generic functions or class.

```typescript
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

const numArray = getArray<number>([1, 2, 3]);
const strArray = getArray<string>(['1', '2', '3']);
```