/* globals module */
function solve() {
    let item;
    let book;
    let media;
    let catalog;
    let bookCatalog;
    let mediaCatalog;
    let validator;
    let idGeneratorFactory;

    idGeneratorFactory = {
        get() {
            return ((() => {
                let lastId = 0;
                return {
                    getNext() {
                        return lastId += 1;
                    }
                };
            })());
        }
    };

    validator = ((() => {
        const CONSTS = {
            ID: {
                MIN: 0.00000,
                MAX: Infinity
            },
            NAME: {
                MIN: 2,
                MAX: 40
            },
            DESCRIPTION: {
                MIN: 1,
                MAX: Infinity
            },
            GENRE: {
                MIN: 2,
                MAX: 20
            },
            RATING: {
                MIN: 1,
                MAX: 5
            },
            DURATION: {
                MIN: 0.00001,
                MAX: Infinity
            },
            PATTERN: {
                MIN: 1,
                MAX: Infinity
            },
            COUNT: {
                MIN: 1,
                MAX: Infinity
            }
        };

        function validateString(str, min, max) {
            if (typeof(str) !== 'string' ||
                str.length < min ||
                str.length > max) {
                throw new Error(`The string must have between ${min} and ${max} characters`);
            }
        }

        function validateNumber(n, min, max) {
            if (typeof(n) !== 'number' ||
                n < min ||
                n > max) {
                throw new Error(`The number must be between ${min} and ${max}`);
            }
        }

        function isNotChar(ch) {
            return isNaN(+ch);
        }

        return {
            validateId(id) {
                validateNumber(id, CONSTS.ID.MIN, CONSTS.ID.MAX);
            },
            validateName(name) {
                validateString(name, CONSTS.NAME.MIN, CONSTS.NAME.MAX);
            },
            validateISBN(isbn) {
                const isString = typeof(isbn) === 'string';
                const hasCorrectLength = isbn.length === 10 || isbn.length === 13;
                const hasNotOnlyDigits = isbn.split('').some(isNotChar);
                if (!isString || !hasCorrectLength || hasNotOnlyDigits) {
                    throw new Error('The ISBN must contain exactly 10 or 13 digits');
                }
            },
            validateDescription(description) {
                validateString(description, CONSTS.DESCRIPTION.MIN, CONSTS.DESCRIPTION.MAX);
            },
            validateRating(rating) {
                validateNumber(rating, CONSTS.RATING.MIN, CONSTS.RATING.MAX);
            },
            validateDuration(duration) {
                validateNumber(duration, CONSTS.DURATION.MIN, CONSTS.DURATION.MAX);
            },
            validateGenre(genre) {
                validateString(genre, CONSTS.GENRE.MIN, CONSTS.GENRE.MAX);
            },
            validatePattern(pattern) {
                validateString(pattern, CONSTS.PATTERN.MIN, CONSTS.PATTERN.MAX);
            },
            validateCount(count) {
                validateNumber(count, CONSTS.COUNT.MIN, CONSTS.COUNT.MAX);
            }
        };
    })());

    item = ((parent => {
        let item;
        let idGenerator;
        idGenerator = idGeneratorFactory.get();
        item = Object.create(parent, {
            name: {
                get() {
                    return this._name;
                },
                set(name) {
                    validator.validateName(name);
                    this._name = name;
                }
            },
            description: {
                get() {
                    return this._description;
                },
                set(description) {
                    validator.validateDescription(description);
                    this._description = description;
                }
            }
        });

        item.init = function(name, description) {
            this.id = idGenerator.getNext();
            this.name = name;
            this.description = description;
            return this;
        };
        return item;
    })({}));

    book = ((parent => {
        const book = Object.create(parent, {
            isbn: {
                get() {
                    return this._isbn;
                },
                set(isbn) {
                    validator.validateISBN(isbn);
                    this._isbn = isbn;
                }
            },
            genre: {
                get() {
                    return this._genre;
                },
                set(genre) {
                    validator.validateGenre(genre);
                    this._genre = genre;
                }
            }
        });

        book.init = function(name, isbn, genre, description) {
            parent.init.call(this, name, description);
            this.isbn = isbn;
            this.genre = genre;
            return this;
        };

        return book;
    })(item));

    media = ((parent => {
        const media = Object.create(parent, {
            rating: {
                get() {
                    return this._rating;
                },
                set(rating) {
                    validator.validateRating(rating);
                    this._rating = rating;
                }
            },
            duration: {
                get() {
                    return this._duration;
                },
                set(duration) {
                    validator.validateDuration(duration);
                    this._duration = duration;
                }
            }
        });

        media.init = function(name, rating, duration, description) {
            parent.init.call(this, name, description);
            this.rating = rating;
            this.duration = duration;
            return this;
        };

        return media;
    })(item));

    catalog = ((parent => {
        let catalog;
        const idGenerator = idGeneratorFactory.get();

        catalog = Object.create(parent, {
            name: {
                get() {
                    return this._name;
                },
                set(name) {
                    validator.validateName(name);
                    this._name = name;
                }
            }
        });

        catalog.init = function(name) {
            this.id = idGenerator.getNext();
            this.name = name;
            this.items = [];
            return this;
        };

        catalog._validateItem = item => {
            validator.validateId(item.id);
            validator.validateName(item.name);
            validator.validateDescription(item.description);
        };

        catalog.add = function(item) {
            if (typeof(item) === 'undefined') {
                throw new Error('undefined cannot be added to a catalog');
            }

            if (typeof(item.length) !== 'undefined') {
                return this.add(...item);
            }
            const itemsToAdd = [];
            const items = [].slice.call(arguments, 0);
            const that = this;
            items.forEach(item => {
                that._validateItem(item);
                itemsToAdd.push(item);
            });
            [].push.apply(this.items, itemsToAdd);
            return this;
        };

        catalog.find = function(options) {
            if (typeof(options) === 'undefined') {
                throw new Error('Id must be ea number');
            }
            let isOnlyId = false;
            let result;
            if (typeof(options) === 'number') {
                options = {
                    id: options
                };
                isOnlyId = true;
            }
            result = this.items.filter(item => Object.keys(options)
                .every(key => options[key] === item[key]));
            if (isOnlyId) {
                if (result.length) {
                    return result[0];
                }
                return null;
            }
            return result;
        };

        catalog.search = function(pattern) {
            validator.validatePattern(pattern);
            pattern = pattern.toLowerCase();
            return this.items.filter(item => item.name.toLowerCase().includes(pattern) ||
                item.description.toLowerCase().includes(pattern));
        };

        return catalog;
    })({}));

    bookCatalog = ((parent => {
        const bookCatalog = Object.create(parent);

        bookCatalog.init = function(name) {
            parent.init.call(this, name);
            return this;
        };

        bookCatalog._validateItem = function(book) {
            parent._validateItem.call(this, book);
            validator.validateGenre(book.genre);
            validator.validateISBN(book.isbn);
        };

        bookCatalog.getGenres = function() {
            const genres = {};
            this.items.forEach(item => {
                genres[item.genre.toLowerCase()] = 1;
            });
            return Object.keys(genres);
        };

        return bookCatalog;
    })(catalog));

    mediaCatalog = ((parent => {
        const mediaCatalog = Object.create(parent);
        mediaCatalog._isValidItem = function(media) {
            return parent._isValidItem.call(this, media) &&
                validator.validateDuration(media.rating) &&
                validator.validateRating(media.duration);
        };

        mediaCatalog.getTop = function(count) {
            validator.validateCount(count);
            const items = this.items.slice();
            items.sort((i1, i2) => i2.rating - i1.rating);

            return items.slice(0, count)
                .map(item => ({
                    id: item.id,
                    name: item.name
                }));
        };
        /*
         *   descending by duration
         *   ascending by id
         */

        mediaCatalog.getSortedByDuration = function() {
            const itemsToReturn = this.items.slice();
            itemsToReturn.sort((i1, i2) => {
                if (i1.duration === i2.duration) {
                    return i1.id - i2.id;
                }
                return i2.duration - i1.duration;
            });
        };

        return mediaCatalog;
    })(catalog));

    return {
        getBook(name, isbn, genre, description) {
            return Object.create(book)
                .init(name, isbn, genre, description);
        },
        getMedia(name, rating, duration, description) {
            return Object.create(media)
                .init(name, rating, duration, description);
        },
        getBookCatalog(name) {
            return Object.create(bookCatalog)
                .init(name);
        },
        getMediaCatalog(name) {
            return Object.create(mediaCatalog)
                .init(name);
        }
    };
}