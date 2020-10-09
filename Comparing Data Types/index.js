let imput1 = NaN;
let imput2 = NaN;

console.log(`Comparing ${imput1} (${typeof(imput1)}) and ${imput2} (${typeof(imput2)})`);

console.log(`When compared with == is ${(imput1 == imput2)}`);
console.log(`When compared with === is ${(imput1 === imput2)}`);
console.log(`When compared with Object.is is ${Object.is(imput1, imput2)}`);
