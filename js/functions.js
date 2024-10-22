//Функция для проверки длины строки.
const checkStringLength = (input, length) => input.length <= length;

//Функция для проверки, является ли строка палиндромом.
const isPalindrome = (input) => {
  const noSpacedAndReversedInput = input.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
  const cleanedInput = input.replaceAll(' ', '').toLowerCase();
  return cleanedInput === noSpacedAndReversedInput;
};

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const getNumbersFromString = (input) => {
  if (typeof input !== 'string' && typeof input !== 'number') {
    return NaN;
  }

  const inputString = input.toString();

  let result = '';
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (!isNaN(parseInt(char, 10))) {
      result += char;
    }
  }

  return result ? parseInt(result, 10) : NaN;
};

//Функция, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

const isMeetingFitsWorktime = (workStartTime, workEndTime, meetingStartTime, meetingDuration) => {
  const worktimeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWorkingMinutes = worktimeToMinutes(workStartTime);
  const endWorkingMinutes = worktimeToMinutes(workEndTime);
  const meetingStartMinutes = worktimeToMinutes(meetingStartTime);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= startWorkingMinutes && meetingEndMinutes <= endWorkingMinutes;
};

//Проверка функций и вывод рузультата функций в консоль браузера

/* eslint-disable no-alert, no-console */
console.log('Проверяем функцию checkStringLengt:');
console.log('Тест №1. Ожидаю true, получаю - ', checkStringLength('проверяемая строка', 20));
console.log('Тест №2. Ожидаю false, получаю - ', checkStringLength('проверяемая строка', 2));

console.log('Проверяем функцию isPalindrome:');
console.log('Тест №1. Ожидаю true, получаю - ', isPalindrome('ДовОд'));
console.log('Тест №2. Ожидаю true, получаю - ', isPalindrome('Лёша на полке клопа нашёл '));
console.log('Тест №3. Ожидаю false, получаю - ', isPalindrome('  Привет пока  '));

console.log('Проверяем функцию getNumbersFromString:');
console.log('Тест №1. Ожидаю 2023, получаю - ', getNumbersFromString('2023 год'));
console.log('Тест №2. Ожидаю 2022, получаю - ', getNumbersFromString('ECMAScript 2022'));
console.log('Тест №3. Ожидаю 105, получаю - ', getNumbersFromString('1 кефир, 0.5 батона'));
console.log('Тест №4. Ожидаю 7, получаю - ', getNumbersFromString('агент 007'));
console.log('Тест №6. Ожидаю NaN, получаю - ', getNumbersFromString('а я томат'));

console.log('Тест №7. Ожидаю 2023, получаю - ', getNumbersFromString(2023));
console.log('Тест №8. Ожидаю 1, получаю - ', getNumbersFromString(-1));
console.log('Тест №9. Ожидаю 15, получаю - ', getNumbersFromString(1.5));

console.log('Проверяем функцию isMeetingFitsWorktime:');
console.log('Тест №10. Ожидаю true, получаю - ', isMeetingFitsWorktime('08:00', '17:30', '14:00', 90));
console.log('Тест №11. Ожидаю true, получаю - ', isMeetingFitsWorktime('8:0', '10:0', '8:0', 120));
console.log('Тест №12. Ожидаю false, получаю - ', isMeetingFitsWorktime('08:00', '14:30', '14:00', 90));
console.log('Тест №13. Ожидаю false, получаю - ', isMeetingFitsWorktime('14:00', '17:30', '08:0', 90));
console.log('Тест №14. Ожидаю false, получаю - ', isMeetingFitsWorktime('8:00', '17:30', '08:00', 900));

/* eslint-enable no-alert */
