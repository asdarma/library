
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
const torah = new Book("The Torah", "Prophet Moses", 1200, "read");
const psalm = new Book("The Psalm", "King David", 200, "read");
const rev = new Book("The Revelation", "Apostle John", 150, "not read");

function addBook(book) {    // 3. Write a function that loops through
    myLibrary.push(book);
}

// manually add books to show
addBook(torah);
addBook(psalm);
addBook(rev);

// DOM to show the book
const bookLibrary = document.getElementById('bookLibrary');

function displayBook() {
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
