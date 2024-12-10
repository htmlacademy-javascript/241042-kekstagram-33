const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = async (onSuccess, onFail, container) => {
  try {
    const response = await fetch(
      `${BASE_URL}${Route.GET_DATA}`
    );

    if (!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }

    const offers = await response.json();

    onSuccess(offers, container);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      `${BASE_URL}${Route.GET_DATA}`,
      {
        method: 'POST',
        body,
      }
    );

    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };
