import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, IMC } from './utils.js'

const form = window.document.querySelector('form')
const inputHeight = document.querySelector('#id-height')
const inputWeight = document.querySelector('#id-weight')

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNaN = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNaN) {
        AlertError.open()
        return
    } 

    AlertError.close()
        
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerHTML = message
    Modal.open()
}