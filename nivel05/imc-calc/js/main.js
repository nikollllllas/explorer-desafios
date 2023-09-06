const form = document.querySelector('form')
const inputHeight = document.querySelector('#id-height')
const inputWeight = document.querySelector('#id-weight')

const modalWrapper = document.querySelector('.modal-bg')
const modalMessage = document.querySelector('#imc-result')
const closeButton = document.querySelector('#close-button')

closeButton.onclick = () => {
    modalWrapper.classList.remove('open')
}

form.onsubmit = (e) => {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    console.log(weight, height)
    const result = IMC(weight, height)
    console.log(result)
    const message = `Seu IMC é de ${result}`
    
    modalMessage.innerHTML = message
    modalWrapper.classList.add('open')
}

function IMC(weight, height) {
    const result = (weight / ((height/100)**2))
    return result.toFixed(2)
}