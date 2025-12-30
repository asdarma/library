function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("Use the 'new' operator !")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
    };
};

const theTorah = new Book("The Torah", "Prophet Moses", 1200, "read");
const thePsalm = new Book("The Psalms", "King David", 200, "read");
const theRevelation = new Book("The Revelation", "Apostle John", 150, "not read");