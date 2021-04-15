
// Напиши функцию  которая возвращает массив всех чётных чисел от start до end.

const getEvenNumbers = function (start, end) {
  const ar = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      ar.push(i);
    }
  }
  console.log(ar);
  return ar;
};
getEvenNumbers(2, 5); //  возвращает [2, 4].
getEvenNumbers(3, 11); //возвращает [4, 6, 8, 10].
