const aboutCompany = document.querySelector('.about-company');
const paragraphs = aboutCompany.querySelectorAll('.about-company__more');
const buttonshowMore = aboutCompany.querySelector('.about-company__button');

aboutCompany.classList.remove('about-company--no-js');

const showAboutCompanyMore = () => {
  buttonshowMore.addEventListener('click', () => {
    paragraphs.forEach((paragraph) => {
      paragraph.classList.toggle('about-company__more');
    });

    if (buttonshowMore.textContent === 'Подробнее') {
      buttonshowMore.textContent = 'Свернуть';
    } else {
      buttonshowMore.textContent = 'Подробнее';
    }
  });
};

export {showAboutCompanyMore};

