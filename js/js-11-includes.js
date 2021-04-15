// Напиши функцию  которая  - проверяет, есть ли в массиве array значение value,
// возвращая true если есть и false в противном случае.

 const includes = function(array, value) {
  
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  console.log(includes([1, 2, 3, 4, 5], 3));
  return false;

}
includes([1, 2, 3, 4, 5], 3); //возвращает true.
includes([1, 2, 3, 4, 5], 17); // возвращает false.
