const mainBlockLink = document.querySelector('[data-get-consultation-button]');
const productsTitle = document.querySelector('[data-products-title]');

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
