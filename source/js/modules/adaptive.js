const mainBlockLink = document.querySelector('.main-block__link');
const productsTitle = document.querySelector('.products h2');

const breakpoint = window.matchMedia('(max-width:767px)');
const breakpointChecker = () => {
  if (breakpoint.matches) {
    mainBlockLink.textContent = 'Бесплатная консультация';
    productsTitle.textContent = 'Товары и услуги Smart Device';
  } else {
    mainBlockLink.textContent = 'Получить бесплатную консультацию';
    productsTitle.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};
breakpoint.addListener(breakpointChecker);

export {breakpointChecker};
