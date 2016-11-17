function solve() {
    'use strict';

    const ERROR_MESSAGES = {
        INVALID_NAME_TYPE: 'Name must be string!',
        INVALID_NAME_LENGTH: 'Name must be between between 2 and 20 symbols long!',
        INVALID_NAME_SYMBOLS: 'Name can contain only latin symbols and whitespaces!',
        INVALID_MANA: 'Mana must be a positive integer number!',
        INVALID_EFFECT: 'Effect must be a function with 1 parameter!',
        INVALID_DAMAGE: 'Damage must be a positive number that is at most 100!',
        INVALID_HEALTH: 'Health must be a positive number that is at most 200!',
        INVALID_SPEED: 'Speed must be a positive number that is at most 100!',
        INVALID_COUNT: 'Count must be a positive integer number!',
        INVALID_SPELL_OBJECT: 'Passed objects must be Spell-like objects!',
        NOT_ENOUGH_MANA: 'Not enough mana!',
        TARGET_NOT_FOUND: 'Target not found!',
        INVALID_BATTLE_PARTICIPANT: 'Battle participants must be ArmyUnit-like!'
    };
    class Validation {
        constructor() {}

        static validateName(value) {
            var typeStr = (typeof(value) === 'string');
            var minStr = (value.length > 2);
            var maxStr = (value.length < 20);
            if (!typeStr || !minStr || !maxStr) {
                throw INVALID_NAME_LENGTH;
            }
        }
    }
    class Spell {
        constructor(name) {
            Validation.validateName(name);
            this._name = name;
        }
    }

    const battlemanager = {

    };

    return battlemanager;
}

module.exports = solve;Duration must be a number";
            }
        }
        static validRating(value) {
            if (isFinite(value)) {
                if (value < 1 || value > 5) {
                    throw "Rating must be between 1 and 5";
                }
            } else {
                throw "Rating must be a number";
            }
        }
        static validCatalogName(value) {
            var typeStr = (typeof(value) === 'string');
            var minStr = (value.length > 2);
            var maxStr = (value.length < 40);
            if (!typeStr || !minStr || !maxStr) {
                throw 'The catalog name is not valid';
            }
        }
        static itemsToAddValidation(items, classType) {
            if (!items || items.length === 0) {
                throw new Error('No items provided!');
            }

            for (let item of items) {
                if (classType instanceof BookCatalog) {
                    if (!(item instanceof Book)) {
                        throw new Error('Element is not of type Book');
                    }
                } else if (classType instanceof MediaCatalog) {
                    if (!(item instanceof Media)) {
                        throw new Error('Element is not of type Media');
                    }
                }
            }
        }

        static validateItemsArray(items) {
            var itemsArray;

            if (Array.isArray(items[0])) {
                itemsArray = items[0];
            } else {
                itemsArray = items;
            }
            return itemsArray;
        }
    }

    class Item {
        constructor(name, description) {
            Validation.validateName(name);
            this._name = name;
            Validation.validateDescription(description);
            this._description = description;

            this._id = ++idGenerator;
        }
        get id() {
            return this._id;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            Validation.validateName(value);
            this._name = value;
        }
        get description() {
            return this._description;
        }
        set description(value) {
            Validation.validateDescription(value);
            this._description = value;
        }
    }

    class Book extends Item {
        constructor(name, isbn, genre, description) {
            super(name, description);

            Validation.validateISBN(isbn);
            this._isbn = isbn;
            Validation.validateGenre(genre);
            this._genre = genre;
        }
        get isbn() {
            return this._isbn;
        }
        set isbn(value) {
            Validation.validateISBN(value);
            this._isbn = value;
        }
        get genre() {
            return this._genre;
        }
        set genre(value) {
            Validation.validateGenre(value);
            this._genre = value;
        }
    }

    class Media extends Item {
        constructor(name, rating, duration, description) {
            super(name, description);
            Validation.validDuration(duration);
            this._duration = duration;
            Validation.validRating(rating);
            this._rating = rating;
        }
        get duration() {
            return this._duration;
        }
        set duration(value) {
            Validation.validDuration(value);
            this._duration = value;
        }
        get rating() {
            return this._rating;
        }
        set rating(value) {
            Validation.validRating(value);
            this._rating = value;
        }
    }
    class Catalog {
        constructor(name) {
            Validation.validCatalogName(name);
            this._name = name;
            this._id = ++idCatalogGenerator;

            this._items = [];
        }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            Validation.validCatalogName(value);
            this._name = value;
        }
        get items() {
            return this._items;
        }
        add(...items) {
            let type = this;
            var itemArray = Validation.validateItemsArray(items);

            Validation.itemsToAddValidation(itemArray, type);

            for (let item of itemArray) {
                this._items.push(item);
            }

            return this;
        }

        find(options) {
            if (typeof(options) === 'object') {
                var result = this.items.filter(function(obj) {
                    return obj.id === options.id,
                        obj.name === options.name;
                });
            } else {
                var obj = this.items.find(function(obj) {
                    return obj.id == options;
                });
            }
            if (obj === undefined) {
                obj = null;
            }
            return obj;
        }

        search(pattern) {

        }
    }
    class BookCatalog extends Catalog {
        constructor(name) {
            super(name);
        }
        getGenres() {
            let uniqueGenre = new Set();
            for (let book of this._items) {
                uniqueGenre.add(book.genre);
            }
            return Array.from(uniqueGenre);
        }
    }
    class MediaCatalog extends Catalog {
        constructor(name) {
            super(name);
        }
        getTop(count) {
            if (isNaN(count) || count < 1) {
                throw "Can not print top media...error"
            }
            var topTen = this._items;
            var resultArr = [];
            var item = {};
            topTen.sort(function(a, b) {
                return a._rating - b._rating;
            });
            for (var i = 0; i < count; i += 1) {
                item.id = topTen[i]._id;
                item.name = topTen[i]._name;
                resultArr.push(item);
                item = {};
            }
            return resultArr;
            //console.log(topTen[1]._id);

        }
        getSortedByDuration() {

        }
    }
    return {
        getBook: function(name, isbn, genre, description) {
            let book = new Book(name, isbn, genre, description);
            return book;
        },
        getMedia: function(name, rating, duration, description) {
            let media = new Media(name, rating, duration, description);
            return media;
        },
        getBookCatalog: function(name) {
            let bookCatalog = new BookCatalog(name);
            return bookCatalog;
        },
        getMediaCatalog: function(name) {
            let mediaCatalog = new MediaCatalog(name);
            return mediaCatalog;
        }
    }

}
var result = solve();
var book1 = result.getBook('asd', '1234567896', 'first', 'fjfjfj');
var book2 = result.getBook('ddf5', '1234567896', 'first', 'fjfjfj');
var book3 = result.getBook('1www', '1234567896', 'second', 'fjfjfj');


var media1 = result.getMedia("llll", 2, 5, 'ddddd');
var media2 = result.getMedia("llll", 5, 5, 'ddddd');
var media3 = result.getMedia("llll", 1, 5, 'ddddd');
var media4 = result.getMedia("llll", 4, 5, 'ddddd');
//console.log(media);

var bookCatalog = result.getBookCatalog('first').add([book1, book2, book3]);
//console.log(bookCatalog);
//console.log(bookCatalog.getGenres());
var mediaCatalog = result.getMediaCatalog("Some media").add(media1, media2, media3, media4);
console.log(mediaCatalog.getTop(4));



//console.log(bookCatalog);
//console.log(mediaCatalog);
//console.log(new Book('mama', 'dddd', '1538885555', 'tygdfgy'));
//console.log(new Media('mama', 'dddd', 5, 5));



//module.exports = solve;