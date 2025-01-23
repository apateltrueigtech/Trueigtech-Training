/*
JavaScript Arrays:-
An array in JavaScript is a data structure used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.
*/


// Creating an array using array literal involves using square brackets [] to define and initialize the array.
// Creating an Empty Array
let a = [];
console.log(a);
// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

/*Basic Operations on JavaScript Arrays
1. Accessing Elements of an Array
Any element in the array can be accessed using the index number. The index in the arrays starts with 0.
*/

// Creating an Array and Initializing with Values
let x = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(x[0]);
console.log(x[1]);

/*Modifying the Array Elements
Elements in an array can be modified by assigning a new value to their corresponding index.
*/
// Creating an Array and Initializing with Values
let d = ["HTML", "CSS", "JS"];
console.log(a);
d[1]= "Bootstrap";
console.log(d);

/*Removing Elements from an Array
To remove the elements from an array we have different methods like pop(), shift(), or splice().

The pop() method removes an element from the last index of the array.
The shift() method removes the element from the first index of the array.
The splice() method removes or replaces the element from the array.
*/

// Creating an Array and Initializing with Values
let i = ["HTML", "CSS", "JS"];
console.log("Original Array: " + i);

// Removes and returns the last element
let lst = i.pop();
console.log("After Removing the last: " + i);

// Removes and returns the first element
let fst = i.shift();
console.log("After Removing the First: " + i);

// Removes 2 elements starting from index 1
i.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + i);