/* ----- ----- Animaciones ----- ----- */

const hambMenu = document.querySelector('.hamb-menu');
const closeMenu = document.querySelector('.close-menu')
const navBar = document.querySelector('.nav');
const overlay = document.querySelector('.nav-overlay')

hambMenu.addEventListener('click', () => {
    navBar.classList.add('show-menu')
    navBar.classList.remove('hide-menu')
    overlay.classList.add('show-menu')
    overlay.classList.remove('hide-menu')
})

closeMenu.addEventListener('click', () => {
    navBar.classList.add('hide-menu')
    navBar.classList.remove('show-menu')
    overlay.classList.add('hide-menu')
    overlay.classList.remove('show-menu')
})