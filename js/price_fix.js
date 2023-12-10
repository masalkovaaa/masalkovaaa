"use strict"

const mainPrice = document.querySelector('.main__price')
const baseInput = document.querySelector('#m1')


if (mainPrice) {
    mainPrice.addEventListener('click', () => {
        document.body.classList.remove('body--no-scroll')
        baseInput.checked = !baseInput.checked
    })
}