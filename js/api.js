const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch (
      'https://32.javascript.htmlacademy.pro/kekstagram/data'
    );

    if (!response.ok) {
      throw new Error('Не удалост загрузить фотографии');
    }

    const offers = await response.json();
    const container = document.querySelector('.pictures');

    onSuccess(offers, container);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      'https://32.javascript.htmlacademy.pro/kekstagram',
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
