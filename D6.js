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
function area(l1, l2) {
  console.log(l1 * l2);
}
area();

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("----------Esercizio 2----------------");

function crazySum(num, num1) {
  if (num !== num1) {
    console.log(num + num1);
    return num + num1;
  } else if (num === num1) {
    console.log(num + num1) * 3;
    return num + num1 * 3;
  }
}

crazySum(2, 4);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("----------Esercizio 3----------------");

function crazyDiff(p) {
  if (p - 19 > 19) {
    console.log(p - 19) * 3;
  } else if (p - 19 < 19) {
    console.log(p - 19);
  }
}

crazyDiff(200);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(29));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("-------------------ESERCIZIO 6------------------");

function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}

console.log(epify("EPICODE"));
console.log(epify("Ciao"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  if (n > 0 && n % 3 === 0 && n % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = (string) => {
  const stringSplit = string.split("");
  const stringReverse = stringSplit.reverse();
  const stringFinale = stringReverse.join(" ");

  return stringFinale;
};
console.log(reverseString("Eleonora"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirstPhrase = (string) => {
  let stringaDiParole = string.split("");
  let stringaFinale = [];

  for (let i = 0; i < stringaDiParole.length; i++) {
    let primaLettera = stringaDiParole[i].charAt(0);
    let primaLetteraMaiuscola = primaLettera.toUpperCase();

    let stringaTagliata = stringaDiParole[i].slice(1);
    let paroleFinali = primaLetteraMaiuscola + stringaTagliata;
    stringaFinale.push(paroleFinali);
  }
  console.log(stringaFinale.join(""));
};

upperFirstPhrase("ciao mi chiamo eleonora");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  return stringa.slice(1, stringa.length - 1);
}
console.log(cutString("Eleonora"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const arrayy = [];
  for (let i = 0; i < n; i++) {
    arrayy.push(Math.floor(Math.random() * 10));
  }
  return arrayy;
}
console.log(giveMeRandom(2));
