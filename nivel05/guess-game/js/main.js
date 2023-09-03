let attempts = 1
const randomNumber = Math.round(Math.random() * 10)

function handleClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector('#inputNumber');

    if(Number(inputNumber.value) == randomNumber) {
        document.querySelector('.screen-one').classList.add('hide');
        document.querySelector('.screen-two').classList.remove('hide');
        document.querySelector('#attempts').innerHTML = `Você acertou em ${attempts} vezes!`
    }

    attempts++


    return inputNumber
}