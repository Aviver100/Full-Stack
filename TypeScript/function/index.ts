// function to negate the number

function NegateNumber(negate:number) {
  let sum = negate - negate * 2;
return sum;
}
console.log(`the negate number is: ` + NegateNumber(5));


const NegateNumber2 = function (negate:number) {
  let sum = negate - negate * 2;
return sum;
}
console.log(`the negate number is: ` + NegateNumber(5));


let NegateNumber3 = (negate:number) => -negate * 2;
  
const mashu = (mispar:number) => mispar *2;

console.log(`the negate number is: ` + NegateNumber(5));



// function that returns the larger of two numbers

function LargeNumber(first: number, second: number) {
  let larger = 0;
  if (first > second) {
    larger = first;
  }
  else {
    larger = second;
  }
  return larger;
}
console.log(`the larger number is: ` + LargeNumber(50,2));




// Convert a Fahrenheit temperature to a Celsius one.

function ConvertFahrenheit(fahrenheit:number) {
  let celsius: number = (fahrenheit - 32) * 5 / 9;
  return celsius
}
console.log(ConvertFahrenheit(86) + ` °C`);



// accepts three arguments: two numbers and an operation

function operation(a:number, b:number, op:number) {
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
      default:
        console.log(`Error`);
  }
}

operation(5, 5, 1);

function plus (numA:number, numB:number){
  let sum = numA + numB
  return sum
}

console.log(plus(4,4));


let plus2 = (numC, numD) => numC + numD 

console.log(plus2(5,5));
