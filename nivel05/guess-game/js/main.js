let attemptsCounter = 1
let randomNumber = Math.round(Math.random() * 10)
const screenOne = document.querySelector('.screen-one')
const screenTwo = document.querySelector('.screen-two')
const attempts = document.querySelector('#attempts')
const buttonTry = document.querySelector('#buttonTry');
const buttonReset = document.querySelector('#buttonReset');
const inputNumber = document.querySelector('#inputNumber');
const wrongAttempts = document.querySelector('#wrongAttempts');

function handleTryClick(e) {
    e.preventDefault();
    
    validateBetweenZeroAndTen()
    validateNullInput()

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen();
        attempts.innerHTML = `Você acertou em ${attemptsCounter} vezes!`
    } else {
        if (wrongAttempts.lastChild) {
            wrongAttempts.removeChild(wrongAttempts.lastChild);
        }
        wrongAttempts.innerHTML += `Tente novamente! Essa foi sua ${attemptsCounter} tentativa.`
    }

    attemptsCounter++
    inputNumber.value = ''
}

function validateBetweenZeroAndTen() { 
    if (inputNumber.value < 0 || inputNumber.value > 10) {
        alert('Por favor, insira um número entre 0 e 10.')
    }
}

function validateNullInput() {
    if (inputNumber.value == null || inputNumber.value == '') {
        alert('Por favor, insira um número.')
    }
}

function handleResetClick(e) {
    e.preventDefault();
    toggleScreen();
    removeChild()

    attemptsCounter = 1
    randomNumber = Math.round(Math.random() * 10)
}

function resetWithEnter(e){
    if(e.key == 'Enter' && screenOne.classList.contains('hide')) {
        handleResetClick(e)
        removeChild()
    }
}

function toggleScreen() {
    screenOne.classList.toggle('hide');
    screenTwo.classList.toggle('hide');
}

function removeChild() {
    wrongAttempts.removeChild(wrongAttempts.lastChild);
}

buttonTry.addEventListener('click', handleTryClick);
buttonReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', resetWithEnter)