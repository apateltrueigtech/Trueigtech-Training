//  Function Declaration

function greet(name){
    console.log(`Hello ${name}`);
}
greet('John');


// Arrow Function

const multiply=(a,b) =>{
    return a*b;
};
console.log(multiply(4,2));

// Callback Function
function process(num,callback){
    return callback(num);
}
const square =(n) => n*n;
console.log(process(4,square));

// Closure
function createCounter(){
    let count =0;
    return function(){
        count++;
        console.log(count);
    };
 }
 const counter = createCounter();
    counter();
    counter();

// Hoisting
 
greet();
 function greet(){
    console.log("Hello");
 }

//  Call By Value

let a=10;
function changeValue(x){
    x=20;
    console.log("Inside function",x);
}
changeValue(a);
console.log("Outside function",a);

// Call By Reference ( Used for Object & Arrays)

let obj = {name:'Alice'};

function modifyObject(o){
    o.name = 'Bob';
    console.log("Inside function:",o.name);
}
modifyObject(obj);
console.log("Outside function:",obj.name);
