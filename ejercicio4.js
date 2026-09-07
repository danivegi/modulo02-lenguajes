/*
    4. Read Books
    Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

    function isBookRead(books, titleToSearch) {
    // Implementation here
    }

    Ejemplo

    const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
    ];

    console.log(isBookRead(books, "Devastación")); // true
    console.log(isBookRead(books, "Canción de hielo y fuego")); // false
    console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
*/

// Función para leer los libros
function isBookRead(books, titleToSearch) {
    const book = books.find((book) => book.title === titleToSearch);
    return book ? book.isRead : false;
}

// Array de los libros
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
    { title: "One Piece", isRead: true },
    { title: "Berserk", isRead: false },
    ];

console.log("Devastación ha sido leído? " + isBookRead(books, "Devastación")); // true
console.log("Canción de hielo y fuego ha sido leído? " + isBookRead(books, "Canción de hielo y fuego")); // false
console.log("Los Pilares de la Tierra ha sido leído? " + isBookRead(books, "Los Pilares de la Tierra")); // false
console.log("One Piece ha sido leído? " + isBookRead(books, "One Piece")); // true
console.log("Berserk ha sido leído? " + isBookRead(books, "Berserk")); // false
console.log("Harry Potter y la piedra filosofal ha sido leído? " + isBookRead(books, "Harry Potter y la piedra filosofal")); // true