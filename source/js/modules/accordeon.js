const accordeon = document.querySelector('[data-accordeon]');
const accordeonTitles = accordeon.querySelectorAll('[data-accordeon] h3');

accordeon.classList.remove('no-js');

const initAccordeon = () => {
  accordeonTitles.forEach((accordeonTitle) => {
    accordeonTitle.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('is-open')) {
        evt.target.classList.remove('is-open');
      } else {
        for (let title of accordeonTitles) {
          title.classList.remove('is-open');
        }
        evt.target.classList.add('is-open');
      }
    });
  });
};

export {initAccordeon};
