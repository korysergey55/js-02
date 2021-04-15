// Поиск самого длинного слова.
// Напиши функцию  которая принимает произвольную строку состоящую только из слов разделённых пробелом
//  и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  const arrString = string.split(" ");
  let leng = arrString[0].length;
  let longestWord;

  for (let i = 0; i < arrString.length; i += 1) {
    if (arrString[i].length > leng) {
      leng = arrString[i].length;
      longestWord = arrString[i];
    }
  }
  console.log(longestWord);
  return longestWord;
};
const words =
  "Напиши функцию которая принимает произвольную строку состоящую только из слов разделённых пробелом";
findLongestWord(words);
