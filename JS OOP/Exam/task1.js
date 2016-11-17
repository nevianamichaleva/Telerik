function solve() {
    'use strict';

    var module = (function () {

        var validators,
            item,
            book,
            media,
            catalog,
            bookcatalog,
            mediacatalog;

        // Validations
        validators = {
            // Undefined
            checkUndefinedAndThrow: function (value) {
                if (value === undefined) {
                    throw new Error(value + ' is undefined');
                }
            },
            // isInteger
            isInteger: function (value) {
                this.checkUndefinedAndThrow(value);
                return Number(value) === value && value % 1 === 0;
            },
            checkIntegerAndThrow: function (value) {
                this.checkUndefinedAndThrow(value);
                if (!this.isInteger(value)) {
                    throw new Error(value + ' not a integer!');
                }
            },
            // Positive integer
            isPositiveInteger: function (value) {
                this.checkUndefinedAndThrow(value);
                return this.isInteger(value) && value > 0;
            },
            checkPositiveIntegerAndThrow: function (value) {
                this.checkUndefinedAndThrow(value);
                if (!this.isPositiveInteger(value)) {
                    throw new Error(value + ' not a positive integer!');
                }
            },
            //Float
            isFloat: function (value) {
                this.checkUndefinedAndThrow(value);
                return Number(value) === value && value % 1 !== 0;
            },
            checkFloatAndThrow: function (value) {
                this.checkUndefinedAndThrow(value);
                if (!this.isFloat(value)) {
                    throw new Error(value + ' not a float!');
                }
            },
            // Number
            isNumber: function (value) {
                this.checkUndefinedAndThrow(value);
                return !isNaN(parseFloat(value)) && isFinite(value);
            },
            checkNumberAndThrow: function (value) {
                this.checkUndefinedAndThrow(value);
                if (!this.isNumber(value)) {
                    throw new Error(value + ' not a number!');
                }
            },
            // String
            isString: function (value) {
                this.checkUndefinedAndThrow(value);
                return (typeof value === 'string' || value instanceof String);
            },
            checkStringAndThrow: function (value) {
                this.checkUndefinedAndThrow(value);
                if (!this.isString(value)) {
                    throw new Error(value + ' not a string!');
                }
            },
            // Boolean
            isBoolean: function (value) {
                this.checkUndefinedAndThrow(value);
                return typeof value === 'boolean' || value === 'true' || value === 'false';
            },
            checkBooleanAndThrow: function (value) {
                if (!this.isBoolean(value)) {
                    this.checkUndefinedAndThrow(value);
                    throw new Error(value + ' not a boolean!');
                }
            },
            // Array
            isArray: function (value) {
                this.checkUndefinedAndThrow(value);
                return Array.isArray(value);
            },
            checkArrayAndThrow: function (value) {
                this.checkUndefinedAndThrow(value);
                if (!this.isArray(value)) {
                    throw new Error(value + ' not a array!');
                }
            },
            // Object
            isObject: function (value) {
                this.checkUndefinedAndThrow(value);
                return (typeof value === 'object');
            },
            checkObjectAndThrow: function (value) {
                this.checkUndefinedAndThrow(value);
                if (!this.isObject(value)) {
                    throw new Error(value + ' not a object!');
                }
            },
            // others
            getById: function (collection, id) {
                if (collection === undefined || id === undefined) {
                    throw new Error();
                }

                var i, len;
                for (i = 0, len = collection.length; i < len; i++) {
                    if (collection[i].id === id) {
                        return collection[i];
                    }
                }

                return null;
            },
            findCollectionByParam: function (paramName, param, collection) {
                var i, len;
                for (i = 0, len = collection.length; i < len; i += 1) {
                    if (collection[i][paramName] === param) {
                        return i;
                    }
                }

                return -1;
            },
            checkRange: function (value, minLen, maxLen) {
                this.checkUndefinedAndThrow(value);
                this.checkNumberAndThrow(minLen);
                this.checkNumberAndThrow(maxLen);
                if (value.length < minLen || value.length > maxLen) {
                    throw new Error(value + ' must be between ' + minLen + ' and ' + maxLen);
                }
            }
        };

        item = (function () {
            var itemInternal = Object.create({}),
                numberId = 0;

            Object.defineProperties(itemInternal, {
                init: {
                    value: function (name, description) {
                        this._id = ++numberId;
                        this.name = name;
                        this.description = description;
                        return this;
                    }
                },
                id: {
                    get: function () {
                        return this._id;
                    }
                },
                name: {
                    get: function () {
                        return this._name;
                    },
                    set: function (value) {
                        validators.checkStringAndThrow(value);
                        validators.checkRange(value, 2, 40);
                        this._name = value;
                    }
                },
                description: {
                    get: function () {
                        return this._description;
                    },
                    set: function (value) {
                        validators.checkStringAndThrow(value);
                        validators.checkRange(value, 1, Number.MAX_VALUE);
                        this._description = value;
                    }
                }
            });
            return itemInternal;
        }());

        book = (function (parent) {
            var bookInternal = Object.create(parent);

            Object.defineProperties(bookInternal, {
                init: {
                    value: function (name, description, isbn, genre) {
                        parent.init.call(this, name, description);
                        this.isbn = isbn;
                        this.genre = genre;
                        return this;
                    }
                },
                isbn: {
                    get: function () {
                        return this._isbn;
                    },
                    set: function (value) {
                        validators.checkStringAndThrow(value);
                        if (value.length !== 10 && value.length !== 13) {
                            throw Error();
                        }
                        if (/^\d+$/.test(value) === false) {
                            throw new Error('isbn do not contain only digits!');
                        }
                        this._isbn = value;
                    }
                },
                genre: {
                    get: function () {
                        return this._genre;
                    },
                    set: function (value) {
                        validators.checkStringAndThrow(value);
                        validators.checkRange(value, 2, 20);
                        this._genre = value;
                    }
                }
            });
            return bookInternal;
        }(item));

        media = (function (parent) {
            var mediaInternal = Object.create(parent);

            Object.defineProperties(mediaInternal, {
                init: {
                    value: function (name, description, duration, rating) {
                        parent.init.call(this, name, description);
                        this.duration = duration;
                        this.rating = rating;
                        return this;
                    }
                },
                duration: {
                    get: function () {
                        return this._duration;
                    },
                    set: function (value) {
                        validators.checkNumberAndThrow(value);
                        if (value <= 0) {
                            throw new Error('duration must be > 0!');
                        }
                        this._duration = value;
                    }
                },
                rating: {
                    get: function () {
                        return this._rating;
                    },
                    set: function (value) {
                        validators.checkNumberAndThrow(value);
                        if (value < 1 || value > 5) {
                            throw new Error('rating must be between 1 and 5!');
                        }
                        this._rating = value;
                    }
                }
            });
            return mediaInternal;
        }(item));

        catalog = (function () {
            var catalogInternal = Object.create({}),
                catalogId = 0;

            Object.defineProperties(catalogInternal, {
                init: {
                    value: function (name) {
                        this._id = ++catalogId;
                        this.name = name;
                        this.items = [];
                        return this;
                    }
                },
                id: {
                    get: function () {
                        return this._id;
                    }
                },
                name: {
                    get: function () {
                        return this._name;
                    },
                    set: function (value) {
                        validators.checkStringAndThrow(value);
                        validators.checkRange(value, 2, 40);
                        this._name = value;
                    }
                },
                add: {
                    value: function () {
                        var i,
                            len,
                            tempArr = [],
                            items = arguments[0];
                        validators.checkUndefinedAndThrow(items);
                        if (validators.isArray(items)) {
                            if (items.length === 0) {
                                throw new Error('Array is empty!');
                            }
                            len = items.length;
                            for (i = 0; i < len; i++) {
                                validators.checkUndefinedAndThrow(items[i]);
                                validators.checkUndefinedAndThrow(items[i].id);
                                validators.checkUndefinedAndThrow(items[i].name);
                                validators.checkUndefinedAndThrow(items[i].description);
                                tempArr.push(items[i]);
                            }
                            Array.prototype.push.apply(this.items, tempArr);
                        } else {
                            len = arguments.length;
                            for (i = 0; i < len; i++) {
                                validators.checkUndefinedAndThrow(arguments[i]);
                                validators.checkUndefinedAndThrow(arguments[i].id);
                                validators.checkUndefinedAndThrow(arguments[i].name);
                                validators.checkUndefinedAndThrow(arguments[i].description);
                                tempArr.push(arguments[i]);
                            }
                            Array.prototype.push.apply(this.items, tempArr);
                        }
                        return this;
                    }
                },
                find: {
                    value: function (idOrOptions) {
                        if (typeof idOrOptions === 'object') {
                            var id = idOrOptions.id,
                                name = idOrOptions.name,
                                isbn = idOrOptions.isbn,
                                genre = idOrOptions.genre,
                                duration = idOrOptions.duration,
                                rating = idOrOptions.rating,
                                result = this.items.slice();
                            if (id) {
                                result = result.filter(function (item) {
                                    if (item.id === id) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                });
                            }
                            if (name) {
                                result = result.filter(function (item) {
                                    if (item.name.toLowerCase() === name.toLowerCase()) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                });
                            }
                            if (isbn) {
                                result = result.filter(function (item) {
                                    if (item.isbn.toLowerCase() === isbn.toLowerCase()) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                });
                            }
                            if (genre) {
                                result = result.filter(function (item) {
                                    if (item.genre.toLowerCase() === genre.toLowerCase()) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                });
                            }
                            if (duration) {
                                result = result.filter(function (item) {
                                    if (item.duration === duration) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                });
                            }
                            if (rating) {
                                result = result.filter(function (item) {
                                    if (item.rating === rating) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                });
                            }
                            return result;
                        } else if (typeof idOrOptions === 'number') {
                            var index = validators.findCollectionByParam('id', idOrOptions, this.items);
                            if (index < 0) {
                                return null;
                            } else {
                                return this.items[index];
                            }
                        } else {
                            throw new Error('ID is neither a object nor a number');
                        }
                    }
                },
                search: {
                    value: function (pattern) {
                        var result = this.items;
                        validators.checkStringAndThrow(pattern);
                        validators.checkRange(pattern, 1, Number.MAX_VALUE);
                        pattern = pattern.toLowerCase();

                        result = result.filter(function (item) {
                            if (item.name.toLowerCase().indexOf(pattern) >= 0 ||
                                item.description.toLowerCase().indexOf(pattern) >= 0) {
                                return true;
                            } else {
                                return false;
                            }
                        });

                        return result;
                    }
                }
            });
            return catalogInternal;
        }());

        bookcatalog = (function (parent) {
            var bookcatalogInternal = Object.create(parent);
            Object.defineProperties(bookcatalogInternal, {
                init: {
                    value: function (name) {
                        parent.init.call(this, name);
                        return this;
                    }
                },
                add: {
                    value: function () {
                        var i,
                            len,
                            items = arguments[0];
                        validators.checkUndefinedAndThrow(items);

                        if (validators.isArray(items)) {
                            if (items.length === 0) {
                                throw new Error('Array is empty!');
                            }
                            len = items.length;
                            for (i = 0; i < len; i++) {
                                validators.checkUndefinedAndThrow(items[i]);
                                validators.checkUndefinedAndThrow(items[i].isbn);
                                validators.checkUndefinedAndThrow(items[i].genre);
                            }
                            parent.add.call(this, items);
                        } else {
                            len = arguments.length;
                            for (i = 0; i < len; i++) {
                                validators.checkUndefinedAndThrow(arguments[i]);
                                validators.checkUndefinedAndThrow(arguments[i].isbn);
                                validators.checkUndefinedAndThrow(arguments[i].genre);
                            }
                            parent.add.call(this, Array.prototype.slice.call(arguments));
                        }
                        return this;
                    }
                },
                getGenres: {
                    value: function () {
                        function onlyUnique(value, index, self) {
                            return self.indexOf(value) === index;
                        }

                        var result = [],
                            i,
                            j,
                            found,
                            len;

                        len = this.items.length;
                        for (i = 0; i < len; i++) {
                            result.push(this.items[i].genre.toLowerCase());
                        }

                        return result.filter(onlyUnique);
                    }
                },
                find: {
                    value: function (options) {
                        var parentFiltered = parent.find.call(this, options);
                        if (options.genre) {
                            parentFiltered = parentFiltered.filter(function (item) {
                                if (item.genre && item.genre.toLowerCase() === options.genre.toLocaleLowerCase()) {
                                    return true;
                                } else {
                                    return false;
                                }
                            });
                        }
                        return parentFiltered;
                    }
                }
            });
            return bookcatalogInternal;
        }(catalog));

        mediacatalog = (function (parent) {
            var mediacatalogInternal = Object.create(parent);

            Object.defineProperties(mediacatalogInternal, {
                init: {
                    value: function (name) {
                        parent.init.call(this, name);
                        return this;
                    }
                },
                add: {
                    value: function (items) {
                        var i,
                            len;
                        validators.checkUndefinedAndThrow(items);

                        if (validators.isArray(items)) {
                            if (items.length === 0) {
                                throw new Error('Array is empty!');
                            }
                            len = items.length;
                            for (i = 0; i < len; i++) {
                                validators.checkUndefinedAndThrow(items[i]);
                                validators.checkUndefinedAndThrow(items[i].duration);
                                validators.checkUndefinedAndThrow(items[i].rating);
                            }
                            parent.add.call(this, items);
                        } else {
                            len = arguments.length;
                            for (i = 0; i < len; i++) {
                                validators.checkUndefinedAndThrow(arguments[i]);
                                validators.checkUndefinedAndThrow(arguments[i].duration);
                                validators.checkUndefinedAndThrow(arguments[i].rating);
                            }
                            parent.add.call(this, Array.prototype.slice.call(arguments));
                        }
                        return this;
                    }
                },
                getTop: {
                    value: function (count) {
                        if (!count || typeof count !== 'number' || count < 1) {
                            throw new Error('Coun err');
                        }
                        return this.items
                            .sort(function (x, y) {
                                if (x.rating > y.rating) {
                                    return -1;
                                } else if (x.rating < y.rating) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            })
                            .filter(function (item) {
                                if (item.rating) {
                                    return true;
                                } else {
                                    return false;
                                }
                            })
                            .map(function (item) {
                                return {
                                    id: item.id,
                                    name: item.name
                                };
                            })
                            .slice(0, count);
                    }
                },
                getSortedByDuration: {
                    value: function () {
                        return this.items.slice().sort(function (item1, item2) {
                            if (item2.duration - item1.duration > 0) {
                                return 1;
                            } else if (item2.duration - item1.duration < 0) {
                                return -1;
                            } else {
                                return item1.id - item2.id;
                            }
                        });
                    }
                }
            });
            return mediacatalogInternal;
        }(catalog));

        return {
            getBook: function (name, isbn, genre, description) {
                return Object.create(book).init(name, description, isbn, genre);
            },
            getMedia: function (name, rating, duration, description) {
                return Object.create(media).init(name, description, duration, rating);
            },
            getBookCatalog: function (name) {
                return Object.create(bookcatalog).init(name);
            },
            getMediaCatalog: function (name) {
                return Object.create(mediacatalog).init(name);
            }
        };

    })();

    return module;
}
