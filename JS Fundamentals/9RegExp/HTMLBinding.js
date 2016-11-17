function solve(args) {
    var data = JSON.parse(args[0]);
    console.log(data.name);
    var html = args[1];
    //var result = html.bind(data);

    console.log(result);
    //for (var property in name) {
    //    var Regex = new RegExp("#\{" + property + "\}", 'g');
    //
    //    str = str.replace(Regex, name[property]);
    //
    //}
    //console.log(str);
}
solve([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);
console.log("<div data-bind-content=\"name\">Steven</div>");
solve([
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]);
console.log("<a data-bind-content=\"name\" data-bind-href=\"link\" data-bind-class=\"name\" href=\"http://telerikacademy.com\" class=\"Elena\">Elena</а>");