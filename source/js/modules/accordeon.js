const accordeon = document.querySelector('[data-accordeon]');
const accordeonTitles = document.querySelectorAll('[data-accordeon] button');

const initAccordeon = () => {
  if (accordeon) {
    accordeon.classList.remove('no-js');
  }

  if (accordeonTitles.length > 0) {
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
  }
};

export {initAccordeon};
