const track = document.querySelector('.carousel-track');
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-track img');
const imageCount = images.length;

// פונקציה למעבר חלק בין התמונות
function moveToNextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    const offset = -currentIndex * 100; // חישוב מיקום התמונה הבאה
    track.style.transform = `translateX(${offset}%)`;
}

// מעבר תמונה כל 3 שניות
setInterval(moveToNextImage, 3000);

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// מחליף שקופית כל 5 שניות
setInterval(showNextSlide, 5000);
