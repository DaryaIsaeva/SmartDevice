const mainBlockLink = document.querySelector('[data-get-consultation-button]');
const productsTitle = document.querySelector('[data-products="title"]');
const cardTitle = document.querySelector('[data-products="link"] h3');

const breakpointMobile = window.matchMedia('(max-width:767px)');
const breakpointDesktop = window.matchMedia('(min-width:1024px)');

const breakpointCheckerMobile = () => {
  if (breakpointMobile.matches) {
    mainBlockLink.textContent = 'Бесплатная консультация';
    productsTitle.innerHTML = 'Товары и услуги <br> Smart Device';
  } else {
    mainBlockLink.textContent = 'Получить бесплатную консультацию';
    productsTitle.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};

const breakpointCheckerDesktop = () => {
  if (breakpointDesktop.matches) {
    cardTitle.innerHTML = 'Монтаж печатных <br> плат';
  } else {
    cardTitle.innerHTML = 'Монтаж <br> печатных плат';
  }
};

breakpointMobile.addListener(breakpointCheckerMobile);
breakpointDesktop.addListener(breakpointCheckerDesktop);

export {breakpointCheckerMobile, breakpointCheckerDesktop};
