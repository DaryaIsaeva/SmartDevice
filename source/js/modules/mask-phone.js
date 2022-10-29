const inputElements = document.querySelectorAll('[data-mask="phone"]');

const addMaskPhone = () => {
  if (!inputElements) {
    return;
  }

  const phoneOptions = {
    mask: '+{7}(000)000-00-00',
  };

  inputElements.forEach((el) => {
    IMask(el, phoneOptions);
  });
};

export {addMaskPhone};
