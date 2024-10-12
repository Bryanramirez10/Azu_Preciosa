let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
    const carousel = document.querySelector('.carousel');
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showSlide, 3500); // Cambia de frase cada 3 segundos
