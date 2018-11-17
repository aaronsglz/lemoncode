
// Hobbits array
const hobbits = ['Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin'];

/* HEAD
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
y devuelva su primer elemento. Utiliza destructuring. */

const head = ([first, ...rest] = []) => first;

console.log(head(hobbits));


/* TAIL
Implementa una función tail (inmutable), tal que, dado un array como entrada
devuelta todos menos el primer elemento. Utiliza rest operator. */

const tail = ([first, ...rest] = []) => rest;

console.log(tail(hobbits));


/* INIT
Implementa una función init (inmutable), tal que, dado un array como entrada
devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
Array.prototype. */

const init = (all) => all.slice(0, all.length - 1);

console.log(init(hobbits));


/* LAST
Implementa una función last (inmutable), tal que, dado un array como entrada
devuelva el último elemento. */

const last = ([...all]) => all.pop(); //all.slice(all.length - 1, all.length)[0];

console.log(last(hobbits));

// Check if the original array changes
//console.log(hobbits);