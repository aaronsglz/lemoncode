/* READ BOOKS
Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se
ha leído o no dicho libro.
Un libro es un objeto con title como string y isRead como booleano. En caso de no
existir el libro devolver false */

function isBookRead (books, titleToSearch) {
    
    let book = books.find((book) => {
        return book.title === titleToSearch;
    });

    return typeof book !== 'undefined' ? book.isRead : false;
};

const books = [
    {title: 'Harry Potter y la piedra filosofal', isRead: true},
    {title: 'Canción de hielo y fuego', isRead: false},
    {title: 'Devastación', isRead: true},
];

console.log(isBookRead(books, 'Devastación')); // true
console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
console.log(isBookRead(books, 'Los Pilares de la Tierra')); // false