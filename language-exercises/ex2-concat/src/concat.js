const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];
const hombres = ['Aragorn', 'Boromir'];
const otros = ['Gandalf', 'Legolas', 'Gimli'];


/* CONCAT
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
devuelva la concatenación de ambos. Utiliza rest/spread operators. */

const concat = (a, b) => a.concat(b);

// Concatenar dos arrays
console.log(concat(hobbits, hombres));



/* OPCIONAL
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de
entrada (más de 2). */

// Forma chunga
// const concatMultiple = (...allArrays) => {
//     let concatenated = [];
//     for (const itemList in allArrays) {
//         concatenated = concatenated.concat(allArrays[itemList]);
//     }
//     return concatenated;
// };

// Forma elegante
const concatMultiple = (...allArrays) => [].concat(...allArrays);

// Concatenar múltiples arrays
console.log(concatMultiple(hobbits, hombres, otros));
