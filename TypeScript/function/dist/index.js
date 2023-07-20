// function to negate the number
var negate = 100;
function NegateNumber() {
    var sum = negate - negate * 2;
    console.log(sum);
}
NegateNumber();
// function that returns the larger of two numbers
var first = 200;
var second = 100;
function LargeNumber() {
    var larger = 0;
    if (first > second) {
        larger = first;
    }
    else {
        larger = second;
    }
    console.log(larger);
}
LargeNumber();
// Convert a Fahrenheit temperature to a Celsius one.
var fahrenheit = 86;
function ConvertFahrenheit() {
    var celsius = (fahrenheit - 32) * 5 / 9;
    console.log(celsius);
}
ConvertFahrenheit();
// accepts three arguments: two numbers and an operation
var a = 10;
var b = 5;
var op = 3;
function operation() {
    switch (op) {
        case 1:
            console.log(a + b);
            break;
        case 2:
            console.log(a - b);
            break;
        case 3:
            console.log(a * b);
            break;
        case 4:
            console.log(a / b);
            break;
    }
}
operation();
