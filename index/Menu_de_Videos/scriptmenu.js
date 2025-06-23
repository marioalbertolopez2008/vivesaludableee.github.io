const carousel = document.getElementById('carousel');
let images = carousel.children;
let currentIndex = 1; // empieza en 1 por el clon al inicio
let transitioning = false;

// Clonamos la última y la primera imagen
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, images[0]);

// Actualiza las referencias (porque cambió el DOM)
images = carousel.children;

carousel.style.transform = `translateX(-100%)`;

function updateCarousel() {
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    if (transitioning) return;
    transitioning = true;
    currentIndex++;
    updateCarousel();
}

function prevSlide() {
    if (transitioning) return;
    transitioning = true;
    currentIndex--;
    updateCarousel();
}

// Después de la transición, si estamos en un clon, saltamos sin transición
carousel.addEventListener('transitionend', () => {
    carousel.style.transition = "none";

    if (currentIndex === images.length - 1) {
        currentIndex = 1;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (currentIndex === 0) {
        currentIndex = images.length - 2;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease-in-out";
        transitioning = false;
    }, 20);
});
