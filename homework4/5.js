function findMatchingDigits(number1, number2) {
   let digits1 = String(number1).split("");
    let digits2 = String(number2).split("");

   let matchingDigits = [];
    let matchingPositions = [];

    for (let i = 0; i < digits1.length; i++) {
        let digit = digits1[i];
        let position = digits2.indexOf(digit);

        if (position !== -1) {
            matchingDigits.push(digit);
            matchingPositions.push(position);
        }
    }

    return { digits: matchingDigits, positions: matchingPositions };
}

let number1 = 1234;
let number2 = 1536;
let result = findMatchingDigits(number1, number2);

console.log(number1);
console.log(number2);
console.log(result.digits.join(", "));
console.log(result.positions.join(", "));