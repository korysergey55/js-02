const changeCase = function (userText) {
  const arrUserText = userText.split("");

  let inverterString = [];

  for (const item of arrUserText) {
    item === item.toUpperCase()
      ? inverterString.push(item.toLowerCase())
      : inverterString.push(item.toUpperCase());
    // if (item === item.toUpperCase()) {
    //   inverterString.push(item.toLowerCase());
    // } else {
    //   inverterString.push(item.toUpperCase());
    // }
  }
  inverterString = inverterString.join("");
  console.log(inverterString);
  console.log(typeof(inverterString));
  
  return inverterString;
};
const textToChange = "FFDFDFEeoeoeERREREkelel yyhyh";
changeCase(textToChange);
