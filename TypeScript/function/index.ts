// function to negate the number

let negate = 100;
function NegateNumber() {
  let sum = negate - negate * 2;
  console.log(sum);

}

NegateNumber();


// function that returns the larger of two numbers

let first = 200;
let second = 100;
function LargeNumber() {
  let larger = 0;
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

let fahrenheit = 86;
function ConvertFahrenheit() {
  let celsius = (fahrenheit - 32) * 5 / 9;
  console.log(celsius);

}

ConvertFahrenheit();

// accepts three arguments: two numbers and an operation

let a = 10;
let b = 5;
let op = 3;
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