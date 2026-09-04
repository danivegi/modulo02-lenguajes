/*
    2. Concat
    Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

    const concat = (a, b) => {}; // Implementation here.
*/

const concat = (a, b) => [...a, ...b];

// Opcional. Método con múltiples arrays
const concatMultiple = (...arrays) => arrays.reduce((acc, arr) => [...acc, ...arr], []);

// Pruebas
const a = [1, 2, 3];
const b = [4, 5, 6];

console.log (concat(a, b)); // Nos da como resultado --> [ 1, 2, 3, 4, 5, 6 ]

console.log (concatMultiple([1], [2, 3], [4, 5])); // Nos da como resultado --> [ 1, 2, 3, 4, 5 ]
console.log (concatMultiple([1], [2], [3], [4])); // Nos da como resultado --> [ 1, 2, 3, 4 ]