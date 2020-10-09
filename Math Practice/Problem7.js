let n = prompt("What is the number of interations?");
let difference = prompt("What is the value of the common difference?");
let initial = prompt("What is the initial value?");

let value = Number(initial) + (n - 1) * difference;

console.log(`The final value of the sequence is ${value}`);