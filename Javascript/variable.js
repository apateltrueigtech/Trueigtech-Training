/* Day 2 - Core Concepts

Variables:-Variables in JavaScript can be declared using var, let, or const. JavaScript is dynamically typed, so variable types are determined at runtime without explicit type definitions.

Declaring Variables in JavaScript

1. JavaScript var keyword
var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs. 
*/

var a = "Hello World";
var b = 10;
console.log(a);
console.log(b);
/*
2. JavaScript let keyword
let is a keyword in JavaScript used to declare variables and it is Block-scoped and not hoisted to the top, suitable for mutable variables
*/

let c = 12
let d = "Hii";
console.log(c);
console.log(d);

/*
3. JavaScript const keyword
const is a keyword in JavaScript used to declare variables and it is Block-scoped, immutable bindings that can’t be reassigned, though objects can still be mutated.
*/ 
const x = 5
let y = "Hello Javascript";
console.log(x);
console.log(y);

/* Datatypes in Javascript
JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

Primitive Datatypes:- Primitive datatypes represent single values and are immutable.

1. Number: Represents numeric values (integers and decimals).
 */
let n = 42;
let pi = 3.14;

// 2. String: Represents text enclosed in single or double quotes.
let s = "Hello, World!";

// 3. Boolean: Represents a logical value (true or false).
let bool= true;

// 4. Undefined: A variable that has been declared but not assigned a value.
let notAssigned;
console.log(notAssigned);

// 5.  Null: Represents an intentional absence of any value.
let empty = null;

// 6 . Symbol: Represents unique and immutable values, often used as object keys.
let sym = Symbol('unique');

//7. BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER.
let bigNumber = 123456789012345678901234567890n;

/*Non-Primitive Datatypes
Non-primitive types are objects and can store collections of data or more complex entities.

1. Object: Represents key-value pairs.
*/
let obj = {
    name: "Amit",
    age: 25
};

// 2. Array: Represents an ordered list of values.
let a = ["red", "green", "blue"]

// 3. Function: Represents reusable blocks of code.

function fun() {
    console.log("Hello");
}
 