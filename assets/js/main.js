const slides = document.querySelectorAll('.slide')

//******
//Home Slides
//******

//Looping through slide elements to form an array and set their position
slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${idx * 100}%)`;
  });

//Slider Animation
let currentSlide = 0;
let maxSlides = slides.length - 1

const prevSlide = document.querySelector('.btn-prev')
const nextSlide = document.querySelector('.btn-next')

// Next Control - On clicking the controls, update the slide: 
nextSlide.addEventListener('click', function() {
    if (currentSlide === maxSlides) {
        currentSlide = 0
    } else {
        currentSlide++
    }

    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`
    })
})

// Prev Control - On clicking the controls, update the slide if its not the first one: 
prevSlide.addEventListener('click', function() {
    if (currentSlide === 0) {
        currentSlide = 0
    } else {
        currentSlide--
    }

    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`
    })
})