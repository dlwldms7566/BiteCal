window.onload = function() {
    //descSlideUp();
};

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var thumbnail = document.getElementsByClassName('thumbnail-image');
    var caption = document.getElementById('caption');

    if(n >= slides.length) { slideIndex = 0; }
    if(n < 0) { slideIndex = slides.length - 1; }
    for(i=0; i<slides.length; i++) {
        if(slideIndex == i) {
            slides[i].style.display = 'block';
            thumbnail[i].classList.add('selected');
        } else {
            slides[i].style.display = 'none';
            thumbnail[i].classList.remove('selected');
        }
    }

    caption.innerHTML = thumbnail[slideIndex].alt;
}

function descSlideUp() {
    var time = 2000;
    var timer = null;

    var content = document.querySelector('.description .col-12');
    content.style.display = 'block';
    var height = 0;

    timer = setInterval(function() {
        if(height < 145) {
            var pos = 145 / (time/60);
            height += pos;
            content.style.height = height + 'px';
        } else {
            content.style.height = '145px';
            clearInterval(timer);
        }
    }, time/60);
}