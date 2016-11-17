/* Task Description */
/* 
 *	Create a module for working with books
 *	The module must provide the following functionalities:
 *	Add a new book to category
 *	Each book has unique title, author and ISBN
 *	It must return the newly created book with assigned ID
 *	If the category is missing, it must be automatically created
 *	List all books
 *	Books are sorted by ID
 *	This can be done by author, by category or all
 *	List all categories
 *	Categories are sorted by ID
 *	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
 *	When adding a book/category, the ID is generated automatically
 *	Add validation everywhere, where possible
 *	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
 *	Author is any non-empty string
 *	Unique params are Book title and Book ISBN
 *	Book ISBN is an unique code that contains either 10 or 13 digits
 *	If something is not valid - throw Error
 */
//function solve() {
var library = (function() {
    var books = [],
        categories = [];

    function listBooks(obj) {
        var sortedBooks,
            props,
            len;

        if (books.length === 0) {
            return books;
        }

        sortedBooks = books.sort(function(a, b) {
            return a.ID - b.ID;
        });

        if (obj) {
            props = Object.keys(obj);
            len = props.length;

            for (var i = 0; i < len; i += 1) {

                sortedBooks = sortedBooks.filter((c) => c[props[i]] === obj[props[i]]);
            }
        }

        return sortedBooks;
    }

    function addBook(book) {
        book.ID = books.length + 1;

        if (!isBookInfoValid(book)) {
            throw new Error('Invalid book info, cannot add book!');
        }

        books.push(book);

        if (categories.filter(x => x.title === book.category).length === 0) {
            setupCategory(categories, book);
        }

        return book;
    }

    function setupCategory(categories, book) {
        var category = {};
        category.title = book.category;
        category.ID = categories.length + 1;

        categories.push(category);
    }

    function listCategories() {

        var sortedCategories = categories.sort(function(a, b) {
            return a.ID - b.ID;
        }).map((c) => c.title);

        return sortedCategories;
    }

    function isBookInfoValid(book) {
        var len = books.length;

        var isISBNLengthValid = book.isbn.length !== 10 && book.isbn.length !== 13;
        var isBookTitleValid = book.title.length < 2 || book.title.length > 100;
        var isCategoryLengthValid = book.category.length < 2 || book.category.length > 100;

        if (isISBNLengthValid ||
            isBookTitleValid ||
            isCategoryLengthValid ||
            !book.author) {
            return false;
        }

        for (var i = 0; i < len; i += 1) {
            var listContainsTitle = book.title === books[i].title;
            var listContainsISBN = book.isbn === books[i].isbn;

            if (listContainsTitle || listContainsISBN) {
                return false;
            }
        }
        return true;
    }

    return {
        books: {
            list: listBooks,
            add: addBook
        },
        categories: {
            list: listCategories
        }
    };
}());
library.books.add();
//library.books.add({ title: "Book 3", author: 'Pe2ep Pepepep', isbn: '1522236545', category: "Poezia" });
//library.books.add({ title: "Book 2", author: 'Pe2p Pepepep', isbn: '1533236545', category: "Poezia" });
//console.log(library.books.list());
//console.log(library.categories.list());
//return library;

//}

//module.exports = solve;