document.addEventListener("DOMContentLoaded", function() {
    var index = 0;
    var slides = document.querySelectorAll('.slideshow img');
    var totalSlides = slides.length;

    setInterval(function() {
        slides[index].classList.remove('active');
        index = (index + 1) % totalSlides;
        slides[index].classList.add('active');
    }, 2500); 
});
