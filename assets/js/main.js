function changePadding() {
  const container = document.querySelector('.consulting__container');
  const headerLeft = document.querySelector('.header-left');
  
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
const slidersClassNames = [
  [ '.partners__list', '.partners__carousel-btns' ],
  [ '.network-list', '.network__carousel-btns' ],
  [ '.team__inner', '.team__carousel-btns']
];

const sliderDots = [];
const slides = [];
let currentSlide = 0;

for (let i = 0; i < slidersClassNames.length; i++) {
  slides.push(document.querySelectorAll(slidersClassNames[i][0]));
  sliderDots.push(document.querySelectorAll(`${slidersClassNames[i][1]} > .carousel-btns__btn`));
}

const goToSlide = (m, i) => {
  currentSlide = m;
  const activeSlide = document.querySelector(`${slidersClassNames[i][0]}.slide_visible`); // here
  activeSlide.classList.remove('slide_visible');
  slides[i][currentSlide].classList.add('slide_visible');

  const activeDot = document.querySelector(`${slidersClassNames[i][1]} > .carousel-btns__btn_active`); // here
  activeDot.classList.remove('carousel-btns__btn_active');
  sliderDots[i][currentSlide].classList.add('carousel-btns__btn_active');
  console.log(activeDot, activeSlide);
};

for (let i = 0; i < sliderDots.length; i++) { // sections with slider
  for (let m = 0; m < sliderDots[i].length; m++) { // buttons
    sliderDots[i][m].addEventListener('click', () => {
      goToSlide(m, i);
    });
  }
}