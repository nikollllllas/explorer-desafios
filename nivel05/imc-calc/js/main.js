import { Modal } from './modal.js'

const form = document.querySelector('form')
const inputHeight = document.querySelector('#id-height')
const inputWeight = document.querySelector('#id-weight')

form.onsubmit = (e) => {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    console.log(weight, height)
    const result = IMC(weight, height)
    console.log(result)
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerHTML = message
    Modal.open()
}

function IMC(weight, height) {
    const result = (weight / ((height/100)**2))
    return result.toFixed(2)
}