let x1 = prompt("What is the value of x1?");
let y1 = prompt("What is the value of y1?");
let x2 = prompt("What is the value of x2?");
let y2 = prompt("What is the value of y2?");

let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(`The distance between the two points (${x1},${y1}) and (${x2},${y2}) is ${distance}`);