function solve(args) {
    var name = JSON.parse(args[0]);
    //console.log(name.name);
    var str = args[1];

    //console.log(str);
    for (var property in name) {
        var Regex = new RegExp("#\{" + property + "\}", 'g');

        str = str.replace(Regex, name[property]);

    }
    console.log(str);
}
solve([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]);
solve([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
]);