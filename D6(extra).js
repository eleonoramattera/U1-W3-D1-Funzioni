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
///////////////////////////////////////////////////////////////////////////////////////////
/* EXTRA 2 (FATTO CON DESTRUTTURAZIONE ARRAY)
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
let shoppingCart = [
  { price: 20, name: "scarpe", id: 657, quantity: 6 }, //120
  { price: 40, name: "gonna", id: 756, quantity: 5 }, //200
  { price: 10, name: "maglia", id: 567, quantity: 9 }, //90
];
const [first, second, third] = shoppingCart;
console.log(first);
console.log(second);
console.log(third);
//PROVA 1
function shoppingCartTotal(uno, due, tre) {
  let prezzo1 = uno.price;
  //console.log(prezzo1);
  let prezzo2 = due.price;
  //console.log(prezzo2);
  let prezzo3 = tre.price;
  //console.log(prezzo3);
  let quantità1 = uno.quantity;
  //console.log(quantità1);
  let quantità2 = due.quantity;
  //console.log(quantità2);
  let quantità3 = tre.quantity;
  //console.log(quantità3);
  let prezzoTotElem1 = prezzo1 * quantità1;
  //console.log(prezzoTotElem1);
  let prezzoTotElem2 = prezzo2 * quantità2;
  //console.log(prezzoTotElem2);
  let prezzoTotElem3 = prezzo3 * quantità3;
  //console.log(prezzoTotElem3);
  let prezzoTotDovutoAlNegozio = prezzoTotElem1 + prezzoTotElem2 + prezzoTotElem3;
  //console.log(prezzoTotDovutoAlNegozio);
  return prezzoTotDovutoAlNegozio;
}

console.log(shoppingCartTotal(first, second, third));

//PROVA 2
/*function shoppingCartTotal(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      const prezzoOgniElementoSingolo = arr[i].price;
      // console.log("prezzoOgniElementoSingolo " + prezzoOgniElementoSingolo); //20 40 10
      // console.log(typeof prezzoOgniElementoSingolo);
      const quantitàOgniElemento = arr[i].quantity;
      //console.log("quantitàOgniElemento " + quantitàOgniElemento); // 6 5 9
      const prezzoTotOgniElemento = prezzoOgniElementoSingolo * quantitàOgniElemento;
      // console.log("prezzoTotOgniElemento " + prezzoTotOgniElemento);
      array = [];
      array.push(prezzoTotOgniElemento);
      //console.log(typeof array);
      array.join("");
      // console.log(array);
    }
    //return array;
  }
  console.log(shoppingCartTotal(shoppingCart));

  
  function calcolaTotProdottiXQuantita(ar) {
    let result = ar.reduce((a, b) => a + b, 0);
    return result;
  }
  console.log(calcolaTotProdottiXQuantita(shoppingCartTotal(shoppingCart)));
  */

//PROVA 3
function shoppingCartTotal(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    const prezzoOgniElementoSingolo = arr[i].price;
    //console.log("prezzoOgniElementoSingolo " + prezzoOgniElementoSingolo); //20 40 10
    const quantitàOgniElemento = arr[i].quantity;
    //console.log("quantitàOgniElemento " + quantitàOgniElemento); // 6 5 9
    const prezzoTotOgniElemento = prezzoOgniElementoSingolo * quantitàOgniElemento;
    //console.log("prezzoTotOgniElemento " + prezzoTotOgniElemento);
    array.push(prezzoTotOgniElemento);
    console.log("array" + array); //così ho array con prezzi tot degli elementi ovver0 120, 200, 90
    //devo sommare questi valori
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    console.log("sum" + sum);
  }

  return sum;
}
console.log(shoppingCartTotal(shoppingCart));
/////////////////////////////////////////////////////////////
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
//senza funzione
shoppingCart = [
  { price: 20, name: "scarpe", id: 657, quantity: 6 }, //120
  { price: 40, name: "gonna", id: 756, quantity: 5 }, //200
  { price: 10, name: "maglia", id: 567, quantity: 9 }, //90
];

let elemento = { price: 12, name: "pantalone", id: 652, quantity: 4 };

shoppingCart.push(elemento);
console.log(shoppingCart);
//con funzione
function addToShoppingCart(paramArr, paramOgg) {
  paramArr.push(paramOgg);
  return paramArr;
}
console.log(addToShoppingCart(shoppingCart, elemento));
///////////////////////////////////////////////////////////////////////////

/* EXTRA 4 //ARRAY DI OGGETTI. COME ESTRAPOLARE PROPRIETA' CON IL FORLOOP
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
shoppingCart = [
  { price: 20, name: "scarpe", id: 657, quantity: 6 }, //120
  { price: 40, name: "gonna", id: 756, quantity: 5 }, //200
  { price: 10, name: "maglia", id: 567, quantity: 9 }, //90
  { price: 12, name: "pantalone", id: 652, quantity: 4 }, //48
];

function maxShoppingCart(arr, prez, nome) {
  let outputPrezzo = []; //array che prende solo i prezzi
  let outputProdotti = []; //array che prende nomi prodotti
  for (let i = 0; i < arr.length; i++) {
    outputPrezzo.push(arr[i][prez]);
    console.log(outputPrezzo);
  }
  for (let i = 0; i < arr.length; i++) {
    outputProdotti.push(arr[i][nome]);
    console.log(outputProdotti);
  }
  let max = Math.max(...outputPrezzo);
  console.log(max);

  return max;
}

console.log(maxShoppingCart(shoppingCart, "price", "name"));

/*
  objArray = [
    { foo: 1, bar: 2 },
    { foo: 3, bar: 4 },
    { foo: 5, bar: 6 },
  ];
  /*I want to extract a field from each object, and get an array containing the values, for example field foo would give array [ 1, 3, 5 ].
  //I can do this with this trivial approach:
  
  function getFields(input, field) {
    var output = [];
    for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
    return output;
  }
  var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]*/

////////////////////////////////////////////////////////

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

shoppingCart = [
  { price: 20, name: "scarpe", id: 657, quantity: 6 }, //120
  { price: 40, name: "gonna", id: 756, quantity: 5 }, //200
  { price: 10, name: "maglia", id: 567, quantity: 9 }, //90
  { price: 12, name: "pantalone", id: 652, quantity: 4 }, //48
];

function latestShoppingCart(arr) {
  return arr.pop();
}
console.log(latestShoppingCart(shoppingCart));

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
