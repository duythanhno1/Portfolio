$('.owl-member').owlCarousel({
  items: 1,
  nav: true,
  dots: true,
  margin: 100,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  navText: ["<img src='./images/prev-button.png' alt='prev-btn'>", "<img src='./images/next-button.png' alt='next-btn'>"],
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
