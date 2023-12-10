let slideIndex = 1;
showSlides(slideIndex);
autoSlides();

function plusSlides(n) { //on button click of arrows
  showSlides(slideIndex += n);
}

function currentSlide(n) { // on button click of circles
  showSlides(slideIndex = n);
}

function showSlides(n) { 
  let i;
  let slides = document.getElementsByClassName("banner");
  let circles = document.getElementsByClassName("slideshow-circle"); //search! what this does
  
  if (n > slides.length) 
    {slideIndex = 1}

  if (n < 1)   
    {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", ""); // search! what are these loops for?
  }

  slides[slideIndex-1].style.display = "block";

  circles[slideIndex-1].className += " active";
}

function autoSlides(n) { //automatic changing of image in slideshow
    let i;
    let slides = document.getElementsByClassName("banner");
    let circles = document.getElementsByClassName("slideshow-circle");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" active", "");
    }

    slideIndex++;

    if (slideIndex > slides.length) 
        {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";

    circles[slideIndex-1].className += " active";

    setTimeout(autoSlides, 4000); // Change image every 4 seconds
}

// creating another js file for search uwu will we combine those??