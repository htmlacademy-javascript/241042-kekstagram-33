import { showBigPicture } from './big-picture';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = (data) => {
  const { comments, description, likes, url } = data;

  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  picture.addEventListener('click', () => showBigPicture(data));

  return picture;
};

const renderPictures = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.appendChild(pictureElement);
  });

  container.append(fragment);
};

export { renderPictures };
