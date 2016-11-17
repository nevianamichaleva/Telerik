var module = (function() {
    var objects = [];
    var nextId = 0;

    function getNextId() {
        return nextId = ++nextId;
    }

    function add(obj) {
        obj.id = getNextId();
        objects.push(obj);
    }

    function list() {
        return objects.slice();
    }
    return {
        add,
        list
    }
}());
module.add({ name: "Bibi" });
module.add({ name: "Sisi" });
module.add({ name: "Fifi" });
console.log(module.list());