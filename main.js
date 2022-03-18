/* abre e fecha o menu quando clicar no icone: hamburger e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item no menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    //scroll é maior que a altura do header
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }
    else {
        //menor que a altura do header
        header.classList.remove('scroll')
    }
})

/* Testimonials caurousel slider swiper */

const swiper = new Swiper('.swiper-container', { 
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewhell: true,
    keyboard: true

});

/* ScrollReveal Mostrar elementos quando de scroll na página */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials heder, #testimonials .testimonials,
    #contact .text, #contact .links`,
     {interval: 100})



/*  Botão voltar para o topo*/

