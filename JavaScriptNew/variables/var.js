// variable declartion using var 
var a= "Hello";
var b=10;
console.log(a);
console.log(b);

// To understand the scope of var
function greet(){
    var message ="Hello World";
    console.log(message);
}
greet();
console.log(message);