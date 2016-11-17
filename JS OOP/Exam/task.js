class Item {
    constructor(description, name) {
        name = name || '';
        description = description || '';
        this._id = setId();
        if (description === '') {
            throw "Description must be filled ";
        }
        this._description = description;
        if (name === '') {
            throw "Name must be filled ";
        }
        if (name.length < 2 || name.length > 40) {
            throw "Name must be string with length between 2 and 40 characters, inclusive";
        }
        this._name = name;
    }
}
var id = 0;

function setId() {
    return id += 1;
}

class Book extends Item {
    constructor(description, name, isbn, genre) {
        super(description, name);
        isbn = isbn || '';
        if (isbn === '') {
            throw "ISBN must be filled";
        }
        let arrFix = isbn.split('').map(Number);
        //console.log(arrFix);
        for (let i = 0; i < arrFix.length; i += 1) {
            //console.log((typeof(arrFix[i]) + arrFix[i]));
            if (isNaN(arrFix[i])) {
                throw 'ISBN can contain only digits';
            }
        }

        if (isbn.length === 10 || isbn.length === 13) {
            this._isbn = isbn;
        } else {
            throw 'Isbn must be a string with length exactly 10 or 13';
        }
        genre = genre || '';
        if (genre === '' || genre.length < 2 || genre.length > 20) {
            throw "Genre must be a string with length between 2 and 20 characters, inclusive";
        }
        this._genre = genre;
    }
}

class Media extends Item {
    constructor(description, name, duration, rating) {
        super(description, name);
        duration = duration || 0;
        if (duration < 0) {
            throw "Duration must be a number greater than 0"
        }
        if (isNaN(duration)) {
            throw "Duration must be a number"
        }
        this._duration = duration;
        rating = rating || 0;
        if (rating < 1 || rating > 5) {
            throw "Rating must be a number between 1 and 5, inclusive";
        }
        if (isNaN(rating)) {
            throw "Rating must be a number";
        }
        this._rating = rating;
    }
}
class Catalog {
    constructor(name) {
        this._id = setId();
        this._name = name;
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    find(id) {

    }
}
let a = new Catalog("Books");
console.log(a);
a.add(new Item('Any item', 'Some book'));
console.log(a);
//console.log(new Item('Any item', 'Some book'));
//console.log(new Item('Item 2', 'Kniga 1'));
//console.log(new Item('Any item2', 'Some book5'));
//console.log(new Item('Item 4', 'Kniga 4'));
//console.log(new Book('Item 4', 'Kniga 4', '1223451422895', "Opisanie nqkakwo"));
//console.log(new Media('Item Media', 'Niakakva media', '6', "5"));