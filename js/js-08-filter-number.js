// Напиши функцию  которая принимает массив чисел (параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers, которые больше чем значение параметра value.

const filterArray = function (numbers, value) {
  let arr = [];
  for (const number of numbers) {
    if (number > value) {
      arr.push(number);
    }
  }
  console.log(arr);
  return arr;
};

const arrayNumbers = [12, 24, 8, 41, 76];

filterArray(arrayNumbers, 20);
