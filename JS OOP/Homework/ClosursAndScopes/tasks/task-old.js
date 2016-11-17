function solve() {
    //Create a module for working with books
    //The module must provide the following functionalities:
    //1. Add a new book to category
    //Each book has unique title, author and ISBN
    //It must return the newly created book with assigned ID
    //If the category is missing, it must be automatically created
    //2. List all books
    //Return an array of books
    //Books are sorted by ID
    //This can be done by author, by category or all
    //They are provided by an options object {category: ...} or {author: ...}
    //3. List all categories
    //Return an array of categories
    //Categories are sorted by ID
    //Each book/catagory has a unique identifier (ID) that is a number greater than 1
    //When adding a book/category, the ID is generated automatically
    //4. Add validation everywhere, where possible
    //Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
    //Author is any non-empty string
    //Unique params are Book title and Book ISBN
    //Book /ISBN is an unique code that contains either 10 or 13 digits
    //If something is not valid - throw Error
    var library = (function() {
        var books = [];
        var categories = [];

        function addBook(title, author, id, categories) {
            this.title = title;
            this.author = author;
            this.id = id;
            this.categories = categories;
            books.push({ this.title + this.author + this.id });
            categories.push({ this.categories });
        }

        function listBooks(books) {
            for (var i = 0; i < books.length; i += 1) {
                console.log(books[i]);
            }
        }

        function listCategories(categories) {
            for (var i = 0; i < categories.length; i += 1) {
                console.log(categories[i]);
            }
        }
    }());

    return library;
}
//module.exports = solve;
library.addBook("fff", 'dddd', '5', 'fff');
console.log(library.books);