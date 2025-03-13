// Object Destructuring

const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};
const {firstName,age} = person;
console.log(firstName);
console.log(age);

// Array Destructuring

const  numbers =[10,20,30];
const [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);


// Hands on Practice

const userDetails ={
    name:"John",
    age:25,
    email:"john@example.com",
    hobbies:['reading','music'],
    updateEmail(newEmail){
        this.email = newEmail;
    },
    addHobby(newHobby){
        this.hobbies.push(newHobby);
    }
};
userDetails.updateEmail('johndoe@example.com');
console.log(userDetails.email);

userDetails.addHobby('travelling');
console.log(userDetails.hobbies);

const{name,hobbies} = userDetails;
console.log(`User:${name},Hobbies:${hobbies.join(",")}`);


