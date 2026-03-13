class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.available = true;
    }
borrowBook() {
        if (this.available) {
            this.available = false;
        }}
returnBook() {
        this.available = true;
    }
 displayInfo() {
        console.log(this.title + " by " + this.author +" | Pages: " + this.pages +" | Available: " + this.available);
    }
}

// Creating 5 books
let book1 = new Book("Harry Potter", "J.K. Rowling", 350);
let book2 = new Book("1984", "George Orwell", 300);
let book3 = new Book("The Hobbit", "J.R.R. Tolkien", 200);
let book4 = new Book("Train to paistan", "khushwant singh", 430);
let book5 = new Book("Untouchable", "Mulk Raj Anand", 330);

let books = [book1, book2, book3, book4, book5];

console.log("Display all books");
books.forEach(book => book.displayInfo());
// Borrow books
book1.borrowBook();
book2.borrowBook();
console.log(" After borrowing 2 books");
books.forEach(book => book.displayInfo());
// Return book
book1.returnBook();
console.log("After returning 1 book");
books.forEach(book => book.displayInfo());
// Countbooks (above 300 pages)
let longBooks = books.filter(book => book.pages > 300);
console.log("Number of long books:", longBooks.length);
// available books
let availableBooks = books.filter(book => book.available);
console.log("Available Books:");
availableBooks.forEach(book => console.log(book.title));