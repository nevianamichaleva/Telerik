function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];
    var x;
    var y;
    var d = (b * b) - (4 * (a * c));

    if (d < 0) {
        console.log("no real roots");
    } else if (d === 0) {
        x = (-b) / (2 * a);
        console.log('x1=x2=' + x.toFixed(2));
    } else if (d > 0) {
        x = ((-b) - Math.sqrt(d)) / (2 * a);
        y = ((-b) + Math.sqrt(d)) / (2 * a);
        console.log('x1=' + x.toFixed(2) + '; ' + 'x2=' + y.toFixed(2));
    }
}
solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['0.2', '9.572', '0.2']);