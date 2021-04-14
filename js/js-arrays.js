
// Напиши функцию которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
    
  const firstElement = array[0];
  const lastElement = array[array.length-1];
  const ret = [firstElement, lastElement];
  
  return ret;

}