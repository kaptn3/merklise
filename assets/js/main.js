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