
import greet, { add, subtract, multiply, divide, square, squareRoot, power } from './mathutils.js';

console.log(greet()); 

console.log("Addition:", add(10, 5)); 
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5)); 
console.log("Division:", divide(10, 5)); 
console.log("Division by zero:", divide(10, 0)); 
console.log("Square:", square(4)); 
console.log("Square Root:", squareRoot(16)); 
console.log("Power:", power(2, 3)); 
