/* EXTRA 2
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

console.log(calcolaTotProdottiXQuantita(shoppingCartTotal(shoppingCart)));
