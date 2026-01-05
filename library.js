
// book constructor
function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("Use the 'new' operator !")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()
};

// book array
const myLibrary = [];

// sample books
myLibrary.push(new Book("The Torah", "Prophet Moses", 1200, "read"));
myLibrary.push(new Book("The Psalm", "King David", 200, "read"));
myLibrary.push(new Book("The Revelation", "Apostle John", 150, "not read"));


function displayBook() {
    // DOM to show the book
    const bookLibrary = document.getElementById('bookLibrary');
    bookLibrary.innerHTML = ''

    // create Div for each book
    const bookDiv = document.createElement('div');

    // foreach book
    myLibrary.forEach(book => {
        bookLibrary.innerHTML += `
        <h3>${book.title}</h3>
        <p><strong>Author: </strong>${book.author}</p>
        <p><strong>Pages: </strong>${book.pages}</p>
        <p><strong>Read: </strong>${book.read}</p>
        `
    bookLibrary.appendChild(bookDiv);
    })
}
displayBook()

function addBook() {    
    // get value
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook();

    // celar the form after adding book
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
}
