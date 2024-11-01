import { getPictures } from './data';
import { renderPictures } from './picture';
import './form.js';

const picturesContainer = document.querySelector('.pictures');

renderPictures(getPictures(), picturesContainer);
