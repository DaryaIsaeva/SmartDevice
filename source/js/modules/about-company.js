const aboutCompany = document.querySelector('[data-company]');
const paragraphs = document.querySelectorAll('[data-company="text-more"]');
const paragraphMobileHidden = document.querySelector('[data-company="text-more-mobile"]');
const buttonShowMore = document.querySelector('[data-company="button"]');
const breakpointMobile = window.matchMedia('(max-width:767px)');

const showAboutCompanyMore = () => {
  if (aboutCompany) {
    aboutCompany.classList.remove('no-js');
  }

  if (buttonShowMore) {
    buttonShowMore.addEventListener('click', () => {
      if (paragraphs.length > 0) {
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
      }
    });
  }
};

export {showAboutCompanyMore};
