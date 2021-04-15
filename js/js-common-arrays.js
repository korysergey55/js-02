// Общие элементы
// Задание. Напиши функцию  которая получает два массива произвольной длины в параметры array1 и array2,
//  и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

const getCommonElements = function (array1, array2) {
  const newArr = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }
  console.log(newArr);
  return newArr;
};
getCommonElements([1, 2, 3], [2, 1, 17, 19]); // 1,2
