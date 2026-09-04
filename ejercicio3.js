/*
    3. Clone Merge
    Clone
    Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

    function clone(source) {
    // Implementation here.
    }
*/

function clone(source) {
    return {...source};
}

/*
    Merge
    Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
*/

function merge(source, target) {
    return {...target, ...source};
}


// Pruebas
const a = { name: "Daniel", surname: "Vega", age: 26 };
const b = { name: "Alberto", city: "Jerez", country: "Spain"};

console.log(clone(a));
console.log(merge(a,b));