
// Добавление элементов в массив.

const addArr = [];
for (let i = 0; i <= 10; i += 1) {
  addArr.push(`element - ${i}`);
}
console.log(addArr);


// Дополни код функции  так, чтобы она возвращала массив всех целых чисел от значения min до max.

const createArrayOfNumbers = function (min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  console.log(numbers);
  return numbers;
};
createArrayOfNumbers(29, 34);
