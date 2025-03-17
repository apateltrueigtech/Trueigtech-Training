const user ={
    name: 'John',
    age: 25,
    email: 'john@example.com',
    greet(){
        console.log(`Hello ${this.name}`);
    }
};
user.greet();
console.log(user.name);
console.log(user.age);