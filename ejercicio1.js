/*
    1. Array operations.

    Head
    Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
    const head = ( array ) => {};
*/

const head = ([first]) => first;

/*
    Tail
    Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
    const tail = ( array ) => {};
*/

const tail = ([, ...rest]) => rest;

/*
    Init
    Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

    const init = ( array ) => {};
*/

const init = (array) => array.slice(0, -1);

/*
    Last
    Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

    const last = ( array ) => {};
*/

const last = (array) => array.at(-1);


// Comprobaciones
const arr = [1, 2, 3, 4, 5];

console.log(head(arr)); // Nos da como resultado --> 1
console.log(tail(arr)); // Nos da como resultado --> [2, 3, 4, 5]
console.log(init(arr)); // Nos da como resultado --> [1, 2, 3, 4]
console.log(last(arr)); // Nos da como resultado --> 5
