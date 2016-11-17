/* Task Description */
/* 
 	Create a module for working with books
 	The module must provide the following functionalities:
 	Add a new book to category
 	Each book has unique title, author and ISBN
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
        var books = [];
        var categories = [];


        function listBooks() {
            return books;
        }

        function addCategory(categories, book) {
            var category = {};
            category.title = book.category;
            category.id = categories.length + 1;
            categories.push(category);
        }

        function addBook(book) {
if (books.length === 0) {
    
}
            book.ID = books.length + 1;
            if (!(isDataValid(book))) {
                throw "Invalid book info";
            }
            //console.log(isDataValid(book));
            books.push(book);
            var arr = [];
            for (let i = 0; i < categories.length; i += 1) {
                if (categories[i].title === book.category) {
                    arr.push(categories[i].title);
                }
            }
            if (arr.length === 0) {
                addCategory(categories, book);
            }
            return book;
        }

        function isDataValid(book) {
            var len = books.length,
                valid = true;
            book.title = book.title || '';
            book.isbn = book.isbn || '';
            book.author = book.author || '';
            book.category = book.category || '';

            var bookTitleValid = book.title.length > 2 || book.title.length < 100;
            var bookISBNValid = book.isbn.length === 10 || book.isbn.length === 13;
            var bookAuthorValid = book.author.length !== 0;
            var bookCategoryValid = book.category.length > 2 || book.category.length < 100;
            //console.log('title:' + bookTitleValid);
            //console.log('isbn:' + bookISBNValid);
            //console.log('author:' + bookAuthorValid);
            //console.log('category:' + bookCategoryValid);
            if (!bookTitleValid || !bookISBNValid || !bookAuthorValid || !bookCategoryValid) {
                valid = false;
            }

            for (let i = 0; i < len; i += 1) {
                var isBookTitleExist = book.title === books[i].title;
                var isISBNExist = book.isbn === books[i].isbn;
                if (isBookTitleExist || isISBNExist) {
                    valid = false;
                }
            }
            return valid;
        }

        function listCategories() {
            return categories;
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
    //return library;
    library.books.add();
    //library.books.add({ title: "Book 2", author: 'Pepep Pepepep', isbn: '1555222545', category: "Poezia" });
    //library.books.add({ title: "Book 3", author: 'Pe3p Pepepep', isbn: '1534522545', category: "Drama" });
    console.log(library.books.list());
    console.log(library.categories.list());
//}
//
//module.exports = solve;