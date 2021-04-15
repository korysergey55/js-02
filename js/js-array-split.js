
// Сервису гравировки украшений нужна функция,
// которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

const calculateEngravingPrice = function (message, pricePerWord) {
  const qantWords = message.split(" ");
  const totalPrise = qantWords.length * pricePerWord;

  console.log(totalPrise);
  return totalPrise;
};
calculateEngravingPrice("(message price Per Word", 5);
