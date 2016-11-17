class listNode {
    constructor(value) {
        this._data = value;
        this._next = null;
    }

    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }

    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
}

class LinkedList {
    constructor() {
        this._length = 0;
        this._firstItem = null;
    }

    get first() {
        let firstElement = this.at(0);
        return firstElement;
    }

    get last() {
        let lastElement = this.at(this.length - 1);
        return lastElement;
    }

    get length() {
        let length = this._length === 0 ? 0 : this._getLength();
        return length;
    }

    append(...values) {
        let currentItem;

        for (const name of values) {

            let itemToAppend = new listNode(name);

            if (this._firstItem) {
                currentItem = this._firstItem;

                while (currentItem.next) {
                    currentItem = currentItem.next;
                }

                currentItem.next = itemToAppend;

            } else {
                this._firstItem = itemToAppend;
            }

            this._length += 1;
        }
        return this;
    }

    prepend(...values) {
        var initialFirstItem = this._firstItem,
            currentItem,
            len = values.length;

        for (let i = 0; i < len; i += 1) {
            let itemToAppend = new listNode(values[i]);

            if (i === 0) {
                this._firstItem = itemToAppend;
                currentItem = itemToAppend;
            } else {
                currentItem.next = itemToAppend;
                currentItem = currentItem.next;
            }

        }
        currentItem.next = initialFirstItem;
        return this;
    }

    insert(index, ...values) {
        let isListEmpty = this._length > 0 && index !== 0;

        if (isListEmpty) {

            let prevIndexElement = this._getElementAt(index - 1),
                nextIndexElement = this._getElementAt(index),
                currentElement = this._getElementAt(index - 1),
                len = values.length;

            for (var i = 0; i < len; i += 1) {
                let elementToAppend = new listNode(values[i]);

                if (len === 1) {
                    prevIndexElement.next = elementToAppend;
                    elementToAppend.next = nextIndexElement;
                    return this;
                } else {
                    currentElement.next = elementToAppend;
                }

                currentElement = currentElement.next;
            }
            currentElement.next = nextIndexElement;
        } else {
            this.prepend(...values);
        }
        return this;
    }

    at(index, value) {
        let indexItem = this._getElementAt(index);

        // Zero is false-like
        if (value || value === 0) {
            indexItem.data = value;
            return this;
        } else {
            return indexItem.data;
        }
    }

    _getElementAt(index) {

        let count = 0,
            currentElement = this._firstItem;

        while (currentElement && count < index) {
            currentElement = currentElement.next;
            count += 1;
        }

        return currentElement;
    }

    _getLength() {
        let counter = 1,
            currentItem = this._firstItem;

        while (currentItem.next) {
            currentItem = currentItem.next;
            counter += 1;
        }

        return counter;
    }

    removeAt(index) {

        if (this._length === 0) {
            return;
        }

        let prevIndexElement = this._getElementAt(index - 1),
            indexElement = this._getElementAt(index) || undefined;

        if (index === 0) {
            this._firstItem = indexElement.next;

        } else {
            prevIndexElement.next = indexElement.next;
        }

        return indexElement.data;
    }

    toArray() {
        let array = [],
            currentItem = this._firstItem;

        for (var i = 0; i < this.length; i += 1) {
            array.push(currentItem.data);

            currentItem = currentItem.next;
        }

        return array;
    }

    toString() {
        let arr = this.toArray(),
            result = arr.join(' -> ');

        return result;
    }

    * [Symbol.iterator]() {
        var currentElement = this._firstItem;

        while (currentElement) {
            yield currentElement.data;
            currentElement = currentElement.next;
        }
    }

}
let a = new LinkedList();
console.log(a.append(1, 2, 3).prepend(4, 5));

module.exports = LinkedList;