function solve(arguments) {

    var word = arguments[0].split("\n"),
        first = word[0],
        second = word[1];
    console.log(first + " , " + second);
    console.log(typeof(first));
    if (first > second) {
        return '>';
    } else if (first < second) {
        return '<';
    } else {
        return '=';
    }
}
solve(['hello\nhalo']);