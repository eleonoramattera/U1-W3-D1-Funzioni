const upperFirstPhrase = function (str) {
  let words = str.split(" ");
  let finalString = [];
  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i].charAt(0);
    console.log("firstChar " + firstChar);
    let uppercaseChar = firstChar.toUpperCase();
    console.log("uppercaseChar " + uppercaseChar);
    let cutString = words[i].slice(1);
    console.log("cutstring " + cutString);
    let finalWord = uppercaseChar + cutString;
    console.log("finalWord " + finalWord);
    finalString.push(finalWord);
  }
  console.log(finalString.join(" "));
};
console.log("---------------------------------------------------------");
upperFirstPhrase("hello world");
