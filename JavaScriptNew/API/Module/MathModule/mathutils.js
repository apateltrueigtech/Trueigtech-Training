

export default function greet() {
    return "Welcome to the Math Utility Module!";
}

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return b !== 0 ? a / b : "Error: Division by zero";
}

export function square(num) {
    return num * num;
}

export function squareRoot(num) {
    return num >= 0 ? Math.sqrt(num) : "Error: Cannot find square root of a negative number";
}

export function power(base, exponent) {
    return Math.pow(base, exponent);
}

