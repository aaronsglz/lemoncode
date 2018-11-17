/* CLONE
Implementa una función clone que, a partir de un objeto de entrada source devuelva
un nuevo objeto con las propiedades de source: */

function clone(source) {
    return {...source};
};

// Object to clone
const hobbit = {
    name: 'Frodo',
    lastName: 'Baggins',
    location: 'The Shire'
};

console.log(clone(hobbit));



/* MERGE
Implementa una función merge que, dados dos objetos de entrada source y target,
devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso
de propiedades con el mismo nombre, source sobreescribe a target. */

function merge(source, target) {
    return {...target, ...source};
}

// Objects to merge
const a = {name: 'Maria', surname: 'Ibañez', country: 'SPA'};
const b = {name: 'Luisa', age: 31, married: true};

console.log(merge(a, b));