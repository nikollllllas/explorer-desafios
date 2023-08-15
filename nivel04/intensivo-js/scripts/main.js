// // 1.
// alert('Hello World!')


// // 2.
// let numberOne = 50
// let numberTwo = 51

// function sumNumbers(numberOne, numberTwo) {
//     const sum = numberOne + numberTwo
//     return sum
// }

// sumResult = sumNumbers(numberOne, numberTwo)

// alert(`A soma dos dois números é: ${sumResult}`)


// 3. 
function numberGenerator () {
    const number = Math.floor(Math.random() * 100)
    return number
}
// let number = numberGenerator()

// if (typeof number == 'number' ) {
//     alert(`É um número`)
// } else {
//     alert(`Não é um número`)
// }

// 4.
// const letter = 'Billy'

// if (typeof letter == 'string') {
//     alert('É uma string')
// } else {
//     alert('Não é uma string')
// }

// 5.
// const switcher = true

// if (typeof switcher == 'boolean') {
//     alert('É um booleano')
// } else {
//     alert('Não é um booleano')
// }

// 6.
// const numberOne = numberGenerator()
// const numberTwo = numberGenerator()

// function subtract(numberOne, numberTwo) {
//     subtract = numberOne - numberTwo
//     return subtract
// }

// const subtractResult = subtract(numberOne, numberTwo)

// alert(`O resultado da subtração é: ${subtractResult}\nOs números utilizados foram: ${numberOne} e ${numberTwo}`)

// 7.

// const numberOne = numberGenerator()
// const numberTwo = numberGenerator()

// function multiply (numberOne, numberTwo) {
//     multiply = numberOne * numberTwo
//     return multiply
// }

// const multiplytResult = multiply(numberOne, numberTwo)

// alert(`O resultado da multiplicação é: ${multiplytResult}\nOs números utilizados foram: ${numberOne} e ${numberTwo}`)

// 8.

// const numberOne = numberGenerator()
// const numberTwo = numberGenerator()

// function division (numberOne, numberTwo) {
//     division = numberOne / numberTwo
//     return division
// }

// const divisionResult = division(numberOne, numberTwo)

// alert(`O resultado da divisão é: ${divisionResult}\nOs número utilizados foram: ${numberOne} e ${numberTwo}`)

// 9. e 10.
const randomNumber = numberGenerator()

if(randomNumber % 1) {
    alert(`É um número par. O número é ${randomNumber}`)
} else if (randomNumber % 2) {
    alert(`É um número ímpar. O número é ${randomNumber}`)
}