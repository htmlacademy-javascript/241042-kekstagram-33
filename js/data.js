import { getRandomInteger, getRandomArrayElement } from './util';

const NAMES = [
  'Артем',
  'Вася',
  'Петя',
  'Маша',
  'Даша',
  'Таня',
];

const DESCRIPTIONS = [
  'Отдыхаем',
  'Веселимся',
  'Кринжуем',
  'Чилим',
  'Работаем',
  'Флексим',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_PICTURE_COUNT = 25;

const MessagesCountRange = {
  MIN: 1,
  MAX: 2,
};

const AvatarsRange = {
  MIN: 1,
  MAX: 6,
};

const LikesCountRange = {
  MIN: 15,
  MAX: 200,
};

const CommentsCountRange = {
  MIN: 0,
  MAX: 30,
};


const createMessage = () => Array.from({length: getRandomInteger(MessagesCountRange.MIN, MessagesCountRange.MAX)}, () => getRandomArrayElement(MESSAGES)).join('');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(AvatarsRange.MIN, AvatarsRange.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCountRange.MIN, LikesCountRange.MAX),
  comments: Array.from({length: getRandomInteger(CommentsCountRange.MIN, CommentsCountRange.MAX)}, (_, commentIndex) => createComment(commentIndex)),
});

const getPictures = () => Array.from({length: SIMILAR_PICTURE_COUNT}, (_, pictureIndex) => createPicture(pictureIndex + 1));

export {getPictures};


