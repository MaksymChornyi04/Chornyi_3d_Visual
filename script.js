const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const link = document.querySelector(".menu__list");
burger.addEventListener('click', () => {
    burger.classList.toggle('burgactive');
    menu.classList.toggle('menuactive');
    document.body.classList.toggle('noscr');
    
})
link.addEventListener('click', () => {
    burger.classList.toggle('burgactive');
    menu.classList.toggle('menuactive');
    document.body.classList.toggle('noscr');
})