// Перебор массива поиск самого большого числа
let sortArr = [23, 3, 4, 5, 6, 700, 85, 8, 9, 40, 6, 4, 9, 22];
let total = 0;
for (let i = 0; i < sortArr.length; i += 1) {
  if (total < sortArr[i]) {
    total = sortArr[i];
  }
}
console.log("Bigest number value - ", total);

// Перебор массива for-of поиск самого большого числа
let numbers = [23, 3, 4, 5, 6, 700, 85, 8, 9, 40, 6, 4, 9, 22];
let lagest = 0;
for (const number of numbers) {
  if (lagest < number) {
    lagest = number;
  }
}
console.log("Bigest number value for of - ", lagest);

// Перебор массива сумма всех чисел
let sort = [23, 3, 4, 5, 6, 700, 85, 8, 9, 40, 6, 4, 9, 22];
let tot = 0;
for (let i = 0; i < sort.length; i += 1) {
  tot = tot += sort[i];
}
console.log("Total sum eletents of array - ", tot);

// // Перебор массива   самое маленькое число в массиве

const smallestNumber = function (userNumbers) {
  let smallest = userNumbers[0];
  for (const number of userNumbers) {
    if (number < smallest) {
      smallest = number;
    }
  }
  console.log("smallestNumber - ", smallest);
  return smallest;
};

const userArr = [23, 3, 4, 5, 6, 700, 85, 8, 9, 40, 6, 4, 9, 22];
smallestNumber(userArr);
