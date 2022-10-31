const aboutCompany = document.querySelector('[data-company]');
const paragraphs = aboutCompany.querySelectorAll('[data-company="text-more"]');
const buttonShowMore = aboutCompany.querySelector('[data-company="button"]');

aboutCompany.classList.remove('no-js');

const showAboutCompanyMore = () => {
  buttonShowMore.addEventListener('click', () => {
    paragraphs.forEach((paragraph) => {
      paragraph.classList.toggle('show-more');
    });

    if (buttonShowMore.textContent === 'Подробнее') {
      buttonShowMore.textContent = 'Свернуть';
    } else {
      buttonShowMore.textContent = 'Подробнее';
    }
  });
};

export {showAboutCompanyMore};
