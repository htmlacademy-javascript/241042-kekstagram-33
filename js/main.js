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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createMessage = () => Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(MESSAGES)).join('');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0 , 30)}, (_, commentIndex) => createComment(commentIndex)),
});

const getPictures = () => Array.from({length: SIMILAR_PICTURE_COUNT}, (_, pictureIndex) => createPicture(pictureIndex + 1));

/* eslint-disable no-alert, no-console */
console.log(getPictures());
/* eslint-enable no-alert */
