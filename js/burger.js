"use strict"

// body with burger menu
const btnMenu = document.querySelector('.btn-menu')

if (btnMenu) {
    btnMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('body--no-scroll')
    })
}