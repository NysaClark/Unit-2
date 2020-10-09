let n = prompt("What is the number of interations?");
let initial = prompt("What is the initial value?");
let rate = prompt("What is the rate of the equation?");

let finalValue = initial * rate ** (n-1);

console.log(`The final value of the sequence is ${finalValue}`);
