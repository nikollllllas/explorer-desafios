export const Modal = {
    wrapper: document.querySelector('.modal-bg'),
    message: document.querySelector('#imc-result'),
    buttonClose: document.querySelector('#close-button'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        Modal.close()
    }
})