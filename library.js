
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
        console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read} ID: ${this.id}`)
    };
};

const theTorah = new Book("The Torah", "Prophet Moses", 1200, "read");
const thePsalm = new Book("The Psalm", "King David", 200, "read");
const theRev = new Book("The Revelation", "Apostle John", 150, "not read");

const myLIbrary = [];

function addBook(book) {    // 3. Write a function that loops through
    myLIbrary.push(book);
}

addBook(theTorah);
addBook(thePsalm);
addBook(theRev);

