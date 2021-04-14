// Поиск самого длинного слова.
// Напиши функцию  которая принимает произвольную строку состоящую только из слов разделённых пробелом
//  и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  const arrString = string.split(" ");
  let longestWordLeng = arrString[0].length;
  let longestWord = arrString[0];

  for (let i = 0; i < arrString.length; i += 1) {
    if (arrString[i].length > longestWordLeng) {
      longestWordLeng = arrString[i].length;
      longestWord = arrString[i];
    }
  }
  return longestWord;
}
