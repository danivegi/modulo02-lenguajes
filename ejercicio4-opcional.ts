/*
    Opcional
    Utiliza Typescript para añadir los tipos adecuados.
*/

interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch);
  return book ? book.isRead : false;
}

// Datos
const books: Book[] = [
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

export {};