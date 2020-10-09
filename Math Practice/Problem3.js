let principle = prompt("What is the starting amount in the account?");
let rate = prompt("What is the annual interest rate in percent?");
let time = prompt("What is the time for the investment in years?");

let amount = principle * (1 + rate * time);

console.log(`THe final amount is ${amount.toFixed(2)}`);