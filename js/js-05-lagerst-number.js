
// Перебор массива
let sortArr = [23, 3, 4, 5, 6, 700, 85, 8, 9, 40, 6, 4, 9, 22];
let total = 0;
for (let i = 0; i < sortArr.length; i++) {
  if (total < sortArr[i]) {
    total = sortArr[i];
  }
}
console.log(total);

// Перебор массива for-of
let numbers = [23, 3, 4, 5, 6, 700, 85, 8, 9, 40, 6, 4, 9, 22];
let lagest = 0;
for (const number of numbers) {
  if (lagest < number) {
    lagest = number;
  }
}
console.log(lagest);
