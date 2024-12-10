const successMessage = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorMessage = document
  .querySelector('#error')
  .content.querySelector('.error');
const body = document.querySelector('body');

const showSuccessMessage = () => {
  successMessage
    .querySelector('.success__button')
    .addEventListener('click', hideMessage);
  body.append(successMessage);
  body.addEventListener('keydown', onEscDown);
  body.addEventListener('click', onBodyClick);
};

const showErrorMessage = () => {
  errorMessage
    .querySelector('.error__button')
    .addEventListener('click', hideMessage);
  body.append(errorMessage);
  body.addEventListener('keydown', onEscDown);

};

function hideMessage() {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  body.removeEventListener('keydown', onEscDown);
  body.removeEventListener('click', onBodyClick);
}

function onBodyClick(evt) {
  if (
    evt.target.closest('.success__inner') ||
    evt.target.closest('.error__inner')
  ) {
    return;
  }
  hideMessage();
}

function onEscDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
    hideMessage();
  }
}

export { showSuccessMessage, showErrorMessage };
