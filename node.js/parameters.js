var operand = inputString[2];
var numOne = process.argv[3];
var numTwo = process.argv[4];

var outputNum;

if (operand === "add") {
    outputNum = parseFloat(numOne) + parseFloat(numTwo);
}

else if (operand === "subtract") {
    outputNum = parseFloat(numOne) - parseFloat(numTwo);
}

else if (operand === "multiply") {
    outputNum = parseFloat(numOne) * parseFloat(numTwo);
}

else if (operand === "divide") {
    outputNum = parseFLoat(numOne) / parseFloat(numTwo);
}

else if (operand === "remainder") {
    outputNum = parseFloat(numOne) % parseFloat(numTwo);
}

console.log(outputNum);




