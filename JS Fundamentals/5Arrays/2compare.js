/*Problem 2. Lexicographically comparison

Write a script that compares two char arrays lexicographically (letter by letter).*/
function solve(args) {
    var arr = args[0].split('\n'),
        word1 = arr[0],
        word2 = arr[1];

    if (word1 > word2) {
        console.log(">");
    } else if (word1 < word2) {
        console.log("<");
    } else {
        console.log("=");
    }
}
solve(['hello\nhalo']);
solve(['food\nfood']);