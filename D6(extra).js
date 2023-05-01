/* EXTRA 1 PASSARE FUNZIONE COME PARAMETRO DI UN'ALTRA FUNZIONE
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
console.log("----------ES 1 (PASSARE FUNZIONE COME PARAMETRO DI UN'ALTRA FUNZIONE-------------");
function giveMeRandom(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
    console.log(arr);
  }
  return arr;
}
console.log(giveMeRandom(2));

function checkArray(arrRandom) {
  let arr = [];
  for (let i = 0; i < arrRandom.length; i++) {
    const elements = arrRandom[i];
    if (elements >= 5) {
      console.log("numero è >= di 5");
    } else if (elements <= 5) {
      console.log("numero <= 5");
    }
    arr.push(elements);
  }
}

console.log(checkArray(giveMeRandom(4)));

/* EXTRA 2 (manca ancora qualche passaggio)
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
let shoppingCart = [
  { price: 20, name: "scarpe", id: 657, quantity: 6 }, //120
  { price: 40, name: "gonna", id: 756, quantity: 5 }, //200
  { price: 10, name: "maglia", id: 567, quantity: 9 }, //90
];

function shoppingCartTotal(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    const prezzoOgniElementoSingolo = arr[i].price;
    //console.log("prezzoOgniElementoSingolo " + prezzoOgniElementoSingolo); //20 40 10
    const quantitàOgniElemento = arr[i].quantity;
    //console.log("quantitàOgniElemento " + quantitàOgniElemento); // 6 5 9
    const prezzoTotOgniElemento = prezzoOgniElementoSingolo * quantitàOgniElemento;
    // console.log("prezzoTotOgniElemento " + prezzoTotOgniElemento);
    array = [];
    array.push(prezzoTotOgniElemento);
    //console.log(typeof array);
    array.join("");
    console.log(array);
  }
  return array;
}

console.log(shoppingCartTotal(shoppingCart));

function calcolaTotProdottiXQuantita(ar) {
  let result = ar.reduce((a, b) => a + b, 0);
  return result;
}
s;

console.log(calcolaTotProdottiXQuantita(shoppingCartTotal(shoppingCart)));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
