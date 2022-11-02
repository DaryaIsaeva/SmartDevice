const mainBlockLink = document.querySelector('[data-get-consultation-button]');
const productsTitle = document.querySelector('[data-products="title"]');
const cardTitle = document.querySelector('[data-products="link"] h3');

const breakpointMobile = window.matchMedia('(max-width:767px)');
const breakpointDesktop = window.matchMedia('(min-width:1024px)');

const breakpointCheckerMobile = () => {
  if (breakpointMobile.matches) {
    if (mainBlockLink) {
      mainBlockLink.textContent = 'Бесплатная консультация';
    }

    if (productsTitle) {
      productsTitle.innerHTML = 'Товары и услуги <br> Smart Device';
    }
  } else {
    if (mainBlockLink) {
      mainBlockLink.textContent = 'Получить бесплатную консультацию';
    }

    if (productsTitle) {
      productsTitle.textContent = 'Smart Device предлагает следующие товары и услуги';
    }
  }
};

const breakpointCheckerDesktop = () => {
  if (breakpointDesktop.matches) {
    if (cardTitle) {
      cardTitle.innerHTML = 'Монтаж печатных <br> плат';
    }
  } else {
    if (cardTitle) {
      cardTitle.innerHTML = 'Монтаж <br> печатных плат';
    }
  }
};

breakpointMobile.addListener(breakpointCheckerMobile);
breakpointDesktop.addListener(breakpointCheckerDesktop);

export {breakpointCheckerMobile, breakpointCheckerDesktop};
