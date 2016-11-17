function solve(args) {
    var str = args[0],
        result,
        regexStr = /^\(+.+[^ \)]\)$/ig;
    result = str.match(regexStr);
    if (result !== null) {
        console.log('Correct');

    } else {
        console.log('Incorrect');
    }
}
solve(['((a+b)/5-d)']);
solve([')(a+b))']);
solve(['(ak3)(']);
solve(['()a+b)/5-d)']);