
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
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages and ${this.read}. Book ID: ${this.id}`)
    };
};

// sampe books
const torah = new Book("The Torah", "Prophet Moses", 1200, "read");
const psalm = new Book("The Psalm", "King David", 200, "read");
const rev = new Book("The Revelation", "Apostle John", 150, "not read");

const myLIbrary = [];

function addBook(book) {    // 3. Write a function that loops through
    myLIbrary.push(book);
}

addBook(torah);     // added book manually to show
addBook(psalm);
addBook(rev);

const libraryTable = document.getElementById('libraryTable');   // get the DOM

function displayBook() {
    myLIbrary.forEach(book => {     // loop on array + dynamicly add then show each data
        libraryTable.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.page}</td>
            <td>${book.read}</td>
            <td>Status</td>
        </tr>
        `
    })
};

displayBook();

