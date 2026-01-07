
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
myLibrary.push(new Book("The Torah", "Prophet Moses", 1200, true)); // update
myLibrary.push(new Book("The Psalm", "King David", 200, false));
myLibrary.push(new Book("The Revelation", "Apostle John", 150, true));


function displayBook() {
    // DOM to show the book
    const bookLibrary = document.getElementById('bookLibrary');
    bookLibrary.innerHTML = ''

    if (myLibrary.length == 0) {
        bookLibrary.innerHTML = `
        <h3>Library is empty</h3>
        `
    }
    // create Div for each book
    const bookDiv = document.createElement('div');

    // foreach book create template literal, then append to bookLibrary div
    myLibrary.forEach(book => {
        bookLibrary.innerHTML += `
        <h3>${book.title}</h3>
        <p><strong>Author: </strong>${book.author}</p>
        <p><strong>Pages: </strong>${book.pages}</p>
        <p><strong>Read: </strong>${book.read ? 'Read' : 'Unread'}</p>
        <button onclick=removeBook("${book.id}")>Remove</button>
        <button onclick=toggleRead("${book.id}")>Toggle</button>
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

    if (title && author && pages) {

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook();

    // celar the form after adding book
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
    } else {
        alert ("Fill all New Book Form");
    }
}

// Added line 43 template literal for button and get the Book id
// This function then take id as param, find the index of matching id
// array.findIndex -> find the INDEX of the OBJECT
// Then splice the array then refresh by call displayBook()
function removeBook(uuid) {
    index = myLibrary.findIndex(book => book.id === uuid)
    if (index !== -1) {
        myLibrary.splice(index, 1)
    }
    displayBook();
}

// Update line 18 for the sample books to use 'true' or 'false' instead 'read' and 'not read'
// Update line 42 for toggle the book.read
// Added line 44 template literal for button and get the Book id
// array.find -> find the ACTUAL OBJECT
// This function then take the id as param, find the object itself
// Then toggle the read true / false
function toggleRead(uuid) {
    const book = myLibrary.find(book => book.id === uuid)
    if (book) {
        book.read = !book.read;
        displayBook()
    }
}