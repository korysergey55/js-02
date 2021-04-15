
// Сумма чисел
// Напиши функцию которая принимает целое число (параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

const calculateTotal = function (number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  console.log(total);
  return total;
};
const enterNumber = 20;
calculateTotal(enterNumber);
