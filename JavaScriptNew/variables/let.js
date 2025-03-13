// variable declartion using let

let a=12;
let b= "Hello";
console.log(a);
console.log(b);

// To understand the scope of let
function myFunction(){
   let x=10;
   console.log(x);
if(true){
    let y=20;
    console.log(y);
}
console.log(y); 
console.log(x);
}
myFunction();
 console.log(x);