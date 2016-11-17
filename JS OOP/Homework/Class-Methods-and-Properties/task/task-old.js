'use strict';

class listNode {
    constructor(value, next) {
        this._value = value;
        this._next = null;
    }
}

class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
    }
    add() {
        var node = {
            data: data,
            next: null
        };
        if (this._head === null) {
            this._head = node;
        } else {
            var current = this._head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        //don't forget to update the count
        this._length++;

    }
}


var list1 = new LinkedList();
list1.add('red');
list1.add('blue');
list1.add('yellow');
console.log(list1);

module.exports = LinkedList;