

// Подсчёт суммы покупки
// Напиши функцию которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.
//  Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

const calculateTotalPrice = function (order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  console.log(total);
  return total;
};

const orderNumber = [5, 6, 7, 8, 9, 0, 4, 2, 7];
calculateTotalPrice(orderNumber);
