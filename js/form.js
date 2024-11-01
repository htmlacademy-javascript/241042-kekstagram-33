const body = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};


const hideModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
