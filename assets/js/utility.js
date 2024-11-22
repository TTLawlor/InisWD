let slideIndex = 1;
let millis = 2000;
let interval;

startSlides();

function startSlides() {
    clearInterval(interval);
    resumeSlides();
    interval = setInterval(resumeSlides, millis);
}

function pauseSlides() {
    clearInterval(interval);
}

function resumeSlides() {
    showSlides();
    slideIndex++;

}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function clickSlides(s){
    slideIndex = s;
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slideIndex > slides.length) { slideIndex = 1; }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}