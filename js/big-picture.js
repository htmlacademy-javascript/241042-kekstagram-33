const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('kwydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => hideBigPicture();

const renderPictureDetails = ({url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);

  renderPictureDetails(data);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };

