const navbar = document.querySelector('nav')
const menu = document.querySelector('.menu')
const years = document.querySelector('.year')
const container = document.querySelector('.container')
const arrowUp = document.querySelector('.to_nav')

console.log(arrowUp)

menu.addEventListener('click', () => {
    navbar.classList.toggle('show')
    if(navbar.classList.contains('show')) {
       menu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    } else {
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }
})

window.addEventListener('scroll', () => {
    if(window.scrollY > navbar.getBoundingClientRect().height) {
        navbar.classList.add('fixe')
    } else {
        navbar.classList.remove('fixe')
    }

    console.log(window.scrollY)

    if(window.scrollY > 500) {
       arrowUp.classList.add('active')
    }
})

let date = new Date()
years.textContent = date.getFullYear()

