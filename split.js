let stringa = "ciao epicoders";

console.log(stringa.split());

console.log(stringa.split(""));

console.log(stringa.split("    "));

console.log(stringa.trim);
/*const capitalized = (stringa) => {
  const words = stringa.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
  }

  const firstLetter = words.CharAt(0).toUpperCase();
  console.log(firstLetter);
};
capitalized("ciao tutti");
*/
const tagliata = (stringg) => {
  stringg.slice(1, stringg.length, -1);
  return stringg;
};
tagliata();
