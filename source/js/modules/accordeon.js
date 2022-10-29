const accordeon = document.querySelector('.accordeon');
const accordeonItems = accordeon.querySelectorAll('.accordeon__item');

accordeon.classList.remove('accordeon--no-js');

const initAccordeon = () => {
  accordeonItems.forEach((accordeonItem) => {
    accordeonItem.addEventListener('click', () => {
      for (let item of accordeonItems) {
        item.classList.remove('accordeon__item--show');
      }
      accordeonItem.classList.toggle('accordeon__item--show');
    });
  });
};

export {initAccordeon};
