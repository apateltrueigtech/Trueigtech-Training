function evalNumbers(num1, num2, option) {

if(option == "add"){
      console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`)
    }
else if(option == "subtract"){
    console.log(`Difference of ${num1} and ${num2} is ${num1-num2}`)
}
else if(option == "multiply"){
    console.log(`Product of ${num1} and ${num2} is ${num1*num2}`)
}
else if(option == "divide"){
    console.log(`Division of ${num1} and ${num2} is ${num1/num2}`)
}
else if(option == "modulus"){
     console.log(`Modulus of ${num1} and ${num2} is ${num1%num2}`)
}
else{
    console.log(`${option} is an invalid operation`)    
}
}
  
  evalNumbers(15,10,"add") 
  evalNumbers(20,8,"subtract")
  evalNumbers(12,4,"multiply") 
  evalNumbers(28,7,"divide")
  evalNumbers(22,3,"modulus") 
  evalNumbers(31,3,"square") 