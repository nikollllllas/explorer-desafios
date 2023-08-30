let numberOne = parseFloat(firstInput);
let numberTwo = parseFloat(secondInput);

function sum(numberOne, numberTwo) {
  let sumResult = numberOne + numberTwo;
  return sumResult;
}

function subtraction(numberOne, numberTwo) {
  let subtractionResult = numberOne - numberTwo;
  return subtractionResult;
}

function multiplication(numberOne, numberTwo) {
  let multiplicationResult = numberOne * numberTwo;
  return multiplicationResult;
}

function division(numberOne, numberTwo) {
  let divisionResult = numberOne / numberTwo;
  return divisionResult;
}

function remainder(sumResult) {
  if (sumResult % 2 == 0) {
    var remainderResult = "A soma dos números é par";
  } else {
    var remainderResult = "A soma dos números é ímpar";
  }
  return remainderResult;
}

function equal(numberOne, numberTwo) {
  if (numberOne == numberTwo) {
    var equalResult = "Os números são iguais";
  } else {
    var equalResult = "Os números são diferentes";
  }
  return equalResult;
}

let firstInput = prompt("Digite o primeiro número: ");
let secondInput = prompt("Digite o segundo número: ");

let sumResult = sum(numberOne, numberTwo);
let subtractionResult = subtraction(numberOne, numberTwo);
let multiplicationResult = multiplication(numberOne, numberTwo);
let divisionResult = division(numberOne, numberTwo);
let remainderResult = remainder(sumResult);
let equalResult = equal(numberOne, numberTwo);

alert(`O resultado da soma é: ${resultSoma}`);
alert(`O resultado da subtração é: ${subtractionResult}`);
alert(`O resultado da multiplicação é: ${multiplicationResult}`);
alert(`O resultado da divisão é: ${divisionResult}`);
alert(`${remainderResult}`);
alert(`${equalResult}`);
