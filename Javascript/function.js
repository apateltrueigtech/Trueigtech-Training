// Day 3: Functions

/*Functions in JavaScript
Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.*/

function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));

/*Arrow Functions
Arrow functions are a concise syntax for writing functions, introduced in ES6, and they do not bind their own this context.

Syntax:
let function_name = (argument1, argument2 ,..) => expression
*/
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = a.map(function (s) {
    return s.length;
});
console.log("Normal way ", a2);
const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3);

/*Callback Functions
A callback function is passed as an argument to another function and is executed after the completion of that function.*/

function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double));
