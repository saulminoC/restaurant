// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');
const totalSlides = slides.length;
const indicatorsContainer = document.getElementById('slider-indicators');
let autoSlideInterval;

// Crear indicadores
slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('slider-indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.slider-indicator');

document.querySelector('.prev-btn').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    changeSlide(1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Función para cambiar el slide automáticamente
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Pausar el slider al pasar el mouse
document.getElementById('slider').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

// Reanudar el slider al quitar el mouse
document.getElementById('slider').addEventListener('mouseout', startAutoSlide);

// Mostrar el primer slide al cargar
slides[currentSlide].classList.add('active');

// Iniciar el auto-slide
startAutoSlide();
