/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("--------ES 1 -----------");
function area(l1, l2) {
  let area = l1 * l2;
  return area;
}

console.log(area(2, 3));
/* ESERCIZIO 2
   Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
   La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
   la loro somma moltiplicata per tre.
  */
console.log("--------ES 2 -----------");
function crazySum(n1, n2) {
  if (n1 !== n2) {
    return n1 + n2;
  } else if (n1 === 2) {
    return (n1 + n2) * 3;
  }
}

console.log(crazySum(2, 2));
console.log(crazySum(6, 2));

/* ESERCIZIO 3
   Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
   Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
  */
console.log("--------ES 3 -----------");
function crazyDiff(n) {
  if (n <= 19) {
    return n - 19;
  } else if (n > 19) {
    return (n - 19) * 3;
  }
}
console.log(crazyDiff(9));
console.log(crazyDiff(20));

/* ESERCIZIO 4
   Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
   se n è uguale a 400.
  */
console.log("--------ES 4 -----------");
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return "true";
  } else {
    return "false";
  }
}
console.log(boundary(24));
console.log(boundary(400));
console.log(boundary(4));

/* ESERCIZIO 5
   Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
   La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
   ritornare la stringa originale senza alterarla.
  */
console.log("--------ES 5 -----------");
function epify(str) {
  if (str === "EPICODE") {
    return str;
  } else if (str !== "EPICODE") {
    return str + "EPICODE";
  }
}
console.log(epify("EPICODE"));
console.log(epify("ciao"));
/* ESERCIZIO 6
   Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
   di 3 o di 7. (Suggerimento: usa l'operatore modulo)
  */
console.log("--------ES 6 -----------");
function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return "è multiplo di 3 o 7";
  } else {
    return "non è multiplo di 3 o 7";
  }
}
console.log(check3and7(8));
console.log(check3and7(9));
/* ESERCIZIO 7
   Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
  */
console.log("--------ES 7 -----------");
function reverseString(str) {
  let strSPLIT = str.split(""); // ogni lettera della stringa diventa un elemento dell'array
  console.log(strSPLIT);
  let strREVERSE = strSPLIT.reverse(); //ribalto array
  console.log(strREVERSE);
  let strJOIN = strREVERSE.join(""); //unisco
  console.log(strJOIN);
  return strJOIN;
}
console.log(reverseString("ELEONORA"));

/* ESERCIZIO 8
   Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
   La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
  */
console.log("--------ES 8 -----------");
function upperFirst(str) {
  let stringaSplit = str.split(" "); // ho diviso la stringa in un'array
  console.log(stringaSplit);
  //adesso ho un'array e devo prendere la prima lettera di ogni parola (elemento)
  let arrFinaleConStringheUnite = []; // creo fuori array finale così lo posso usare fuori dal forLoop
  for (let i = 0; i < stringaSplit.length; i++) {
    // console.log(stringaSplit[i]);
    let primaLettera = stringaSplit[i].charAt(0);
    // console.log(primaLettera);
    let primaLetteraMaiuscola = primaLettera.toUpperCase();
    //console.log(primaLetteraMaiuscola);
    let tagliaPrimaLetteraMinuscola = stringaSplit[i].slice(1);
    //console.log(tagliaPrimaLetteraMinuscola);
    let arrayUnito = primaLetteraMaiuscola + tagliaPrimaLetteraMinuscola;
    // console.log(arrayUnito);
    // console.log(typeof arrayUnito); // è una stringa e le devo unire un un'array finale
    arrFinaleConStringheUnite.push(arrayUnito);
    console.log(arrFinaleConStringheUnite);
    console.log(arrFinaleConStringheUnite.join(""));
  }
  return arrFinaleConStringheUnite;
}

console.log(upperFirst("ciao delevopers"));

/* ESERCIZIO 9
   Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
   della stringa originale.
  */
function cutString(str) {
  let stringaInArr = str.split("");
  console.log(stringaInArr);
  let stringaInArrTagliata = stringaInArr.slice(1, -1);
  return stringaInArrTagliata;
}
console.log(cutString("ciao"));
//oppure con shift() rimuove primo elemento e pop()rimuove ultimo elemento
/* ESERCIZIO 10
   Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
  */
function giveMeRandom(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
    console.log(arr);
  }
}
console.log(giveMeRandom(2)); //il numero che metto qui indica quanti array verranno creati
