class listNode {
    constructor(value, next) {
        this._data = value;
        this._next = null;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get next() {
        return this._next;
    }
    set next(value) {
        this._next = value;
    }
}
class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
    }
    get first() {
        return this._next;
    }
    get last() {

    }
    get length() {

    }
    append(...values) {
        let currItem;
        for (const name of values) {
            let itemToAppend = new listNode(name);
            if (this._head !== null) {
                currItem = this._head;
                while (currItem.next) {
                    currItem = currItem.next;
                }
                currItem.next = itemToAppend;
            } else {
                this._head = itemToAppend;
            }
            this._length += 1;
        }

        return this;
    }
    prepend(...values) {
        
    }
}
let a = new LinkedList();
a.append(5, 6, 7, 8, 7, 6, 5).append(2);
console.log(a._head._next._next._next._next._next);