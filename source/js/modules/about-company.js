const aboutCompany = document.querySelector('[data-company]');
const paragraphs = aboutCompany.querySelectorAll('[data-company="text-more"]');
const paragraphMobileHidden = aboutCompany.querySelector('[data-company="text-more-mobile"]');
const buttonShowMore = aboutCompany.querySelector('[data-company="button"]');
const breakpointMobile = window.matchMedia('(max-width:767px)');

aboutCompany.classList.remove('no-js');

const showAboutCompanyMore = () => {
  buttonShowMore.addEventListener('click', () => {
    paragraphs.forEach((paragraph) => {
      paragraph.classList.toggle('show-more');
    });

    if (breakpointMobile.matches) {
      paragraphMobileHidden.classList.toggle('show-more-mobile');
    }

    if (buttonShowMore.textContent === 'Подробнее') {
      buttonShowMore.textContent = 'Свернуть';
    } else {
      buttonShowMore.textContent = 'Подробнее';
    }
  });
};

export {showAboutCompanyMore};
