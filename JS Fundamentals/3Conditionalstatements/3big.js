function solve(args) {
    var a = +args[0], b = +args[1], c = +args[2];
    if (a > b && a > c) {
        console.log(a);
    } else if (b > c && b > a) {
        console.log(b);
    } else {
        console.log(c);
    }
}
solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-1', '-0.5', '-5.1']);
solve(['-0.1', '-0.5', '-1.1']);
solve(['3', '-2', '5']);

