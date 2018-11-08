function changePadding() {
  const container = document.querySelector('.consulting__container');
  const headerLeft = document.querySelector('.header__left');
  
  if (headerLeft) {
    const margin = getComputedStyle(container).marginLeft;
    headerLeft.style.marginLeft = margin;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  changePadding();
});

window.onresize = function() {
  changePadding();
}

// Sliders
const sliderDots = document.querySelectorAll('.carousel-btns__btn');
let currentSlide = 0;
let slides = document.querySelectorAll('.partners__list');

const goToSlide = (n) => {
  currentSlide = n;
  const activeSlide = document.getElementsByClassName('slide_visible')[0];
  activeSlide.classList.remove('slide_visible');
  slides[currentSlide].classList.add('slide_visible');

  const activeDot = document.getElementsByClassName('carousel-btns__btn_active')[0];
  activeDot.classList.remove('carousel-btns__btn_active');
  sliderDots[currentSlide].classList.add('carousel-btns__btn_active');
};

for(let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].addEventListener('click', () => {
    goToSlide(i);
  });
}