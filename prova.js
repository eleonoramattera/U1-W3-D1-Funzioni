/*const upperFirstPhrase = function (str) {
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
upperFirstPhrase("hello world");*/

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(num) {
  let n = Math.floor(Math.random() * 9);
  for (let i = 0; i < n.length; i++) {
    console.log(n);
  }
  return n;
}

console.log(loopUntil(2));
