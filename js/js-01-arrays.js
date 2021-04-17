
// Напиши функцию которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

const getExtremeElements = function (array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  const screen = [firstElement, lastElement];

  console.log(screen);
  return screen;
};

const value = [4, 5, 7, 8, 5,9];
getExtremeElements(value);
getExtremeElements(value);
