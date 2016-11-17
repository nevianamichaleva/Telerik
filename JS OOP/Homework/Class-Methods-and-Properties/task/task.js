var some = (function (){
var result = [];

let AppendMixin = Base => class extends Base {
    append(array) {
        
        result = array.split(',').map(Number);
        return this;
    }
}
return {
        AppendMixin
    };
}());
class listNode {
    constructor(data) {
        this._data = data;
        //this._next = next;
    }
}

class LinkedList extends AppendMixin(Object) {
    constructor(array) {
        super();
    }

}
const list1 = new LinkedList();
console.log(list1.append('1, 2, 3'));

//module.exports = LinkedList;