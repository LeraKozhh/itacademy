function splitNumber(number) {
    let num1 = Math.floor(Math.random() * number * 100)/100;
    let num2 = Math.floor(Math.random() * (number - num1) *100)/100;
    let num3 = number - num1 - num2;
    return [num1, num2, num3];
}

let inputNumber =20;
let result = splitNumber(inputNumber);

console.log(inputNumber);
console.log( result.join(", "));