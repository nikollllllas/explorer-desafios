import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

const form = window.document.querySelector('form')
const inputHeight = document.querySelector('#id-height')
const inputWeight = document.querySelector('#id-weight')

form.onsubmit = (e) => {
    e.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        AlertError.open()
        return
    } 

    AlertError.close()
        
    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
    
    Modal.message.innerHTML = message
    Modal.open()
}

function notNumber(value) {
    return isNaN(value) || value == ''
}

function IMC(weight, height) {
    const result = (weight / ((height/100)**2))
    return result.toFixed(2)
}