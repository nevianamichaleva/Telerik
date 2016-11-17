function solve(args) {
    var str = args[0],
        count = 0,
        found;

    for (i = 0; i < str.length; i += 1) {
        found = str[i].search(/\(/);
        found1 = str[i].search(/\)/);
        if (found !== -1) {
            count += 1;
        } else if (found1 !== -1) {
            count -= 1;
        }
    }
    if (count === 0) {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
}
solve(['((a+b)/5-d)']);
solve([')(a+b))']);
solve(['(ak3)(']);
solve(['()a+b)/5-d)']);