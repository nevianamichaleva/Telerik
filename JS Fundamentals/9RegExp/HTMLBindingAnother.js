function solve(args){
    var obj = JSON.parse(args[0]);
    var text = ''+args[1];
    text = text.replace(/'/, '"');    
    var regex = /data-bind-(.*?)="(.*?)"/gmi;
    var currentMatch;
    while(currentMatch = regex.exec(text)){
        var index = text.indexOf('>');
        if (text[index - 1] === '/') { // if tag is self closing
            index--;
        }
        var field = currentMatch[1];
        if (field.toLowerCase() === 'content') {
            var arr = text.split('');
            var x = arr.splice(index + 1, 0, obj[currentMatch[2]]);
            text = arr.join('');
        }
        else {
            var arr2 = text.split('');
            var x2 = arr2.splice(index, 0, " " + field + '="'+ obj[currentMatch[2]] + '"');
            text = arr2.join('');
        }
    }
 
    console.log(text);
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