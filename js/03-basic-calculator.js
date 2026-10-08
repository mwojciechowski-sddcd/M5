// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case "+":
        case "add":
            return x + y;
        case "-":
        case "subtract":
            return x - y;
        case "*":
        case "multiply":
            return x * y;
        case "/":
        case "divide":
            return y !== 0 ? x / y : "Error: Division by zero";
        default:
            return null;
    }
}

let num1, num2, operation, isValidOperation;

do {
    // COLLECT FIRST NUMBER FROM USER
    num1 = parseFloat(prompt("Enter the first number:"));

    // COLLECT SECOND NUMBER FROM USER
    num2 = parseFloat(prompt("Enter the second number:"));

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt("Enter an operation (+, -, *, / or add, subtract, multiply, divide):").toLowerCase().trim();

    // Validate operation entry
    if (["+", "-", "*", "/", "add", "subtract", "multiply", "divide"].includes(operation)) {
        isValidOperation = true;
    } else {
        isValidOperation = false;
        alert("Invalid operation! Please enter +, -, *, / or add, subtract, multiply, divide.");
    }
} while (!isValidOperation);

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
const result = calculate(num1, num2, operation);
alert(`The result is: ${result}`);