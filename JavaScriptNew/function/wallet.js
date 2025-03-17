
let balance = 1000;

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(` Deposited $${amount}. New balance: $${balance}`);
    } else {
        console.log(" Deposit amount must be greater than zero.");
    }
}

function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${balance}`);
    } else if (amount > balance) {
        console.log(" Insufficient balance.");
    } else {
        console.log("Withdrawal amount must be greater than zero.");
    }
}

console.log(` Initial Balance: $${balance}`);

deposit(500); 
withdraw(1200); 
withdraw(800);  
