// // 1.
alert("Hello World!");

// // 2.
let numberOne = numberGenerator();
let numberTwo = numberGenerator();

function sumNumbers(numberOne, numberTwo) {
  const sum = numberOne + numberTwo;
  return sum;
}

sumResult = sumNumbers(numberOne, numberTwo);

alert(
  `A soma dos dois números é: ${sumResult}\nOs números são: ${numberOne} e ${numberTwo}`,
);

// 3.
function numberGenerator() {
  const number = Math.floor(Math.random() * 100);
  return number;
}
let number = numberGenerator();

if (typeof number == "number") {
  alert(`É um número`);
} else {
  alert(`Não é um número`);
}

// 4.
const letter = "Billy";

if (typeof letter == "string") {
  alert("É uma string");
} else {
  alert("Não é uma string");
}

5;
const switcher = true;

if (typeof switcher == "boolean") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

// 6.
const numberOneSub = numberGenerator();
const numberTwoSub = numberGenerator();

function subtract(numberOneSub, numberTwoSub) {
  subtract = numberOneSub - numberTwoSub;
  return subtract;
}

const subtractResult = subtract(numberOneSub, numberTwoSub);

alert(
  `O resultado da subtração é: ${subtractResult}\nOs números utilizados foram: ${numberOneSub} e ${numberTwoSub}`,
);

// 7.

const numberOneMulti = numberGenerator();
const numberTwoMulti = numberGenerator();

function multiplication(numberOneMulti, numberTwoMulti) {
  multiplication = numberOneMulti * numberTwoMulti;
  return multiplication;
}

const multiplytResult = multiplication(numberOneMulti, numberTwoMulti);

alert(
  `O resultado da multiplicação é: ${multiplytResult}\nOs números utilizados foram: ${numberOneMulti} e ${numberTwoMulti}`,
);

// 8.

const numberOneDivi = numberGenerator();
const numberTwoDivi = numberGenerator();

function division(numberOneDivi, numberTwoDivi) {
  division = numberOneDivi / numberTwoDivi;
  return division;
}

const divisionResult = division(numberOneDivi, numberTwoDivi);

alert(
  `O resultado da divisão é: ${divisionResult}\nOs número utilizados foram: ${numberOneDivi} e ${numberTwoDivi}`,
);

// 9. e 10.
const randomNumber = numberGenerator();

if (randomNumber % 1) {
  alert(`É um número par. O número é ${randomNumber}`);
} else if (randomNumber % 2) {
  alert(`É um número ímpar. O número é ${randomNumber}`);
}
