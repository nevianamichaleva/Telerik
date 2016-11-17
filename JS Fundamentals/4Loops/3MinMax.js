function solve(args) {

    var l = args.length;
    var max = +args[0];
    var min = +args[0];
    var i;
    var sum = 0,
        avg = 0;
    for (i = 0; l > i; i++) {
        if (+args[i] > max) {
            max = +args[i];
        }
        if (+args[i] < min) {
            min = +args[i];
        }
        sum += +args[i];
    }
    avg = sum / l;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
solve(['2', '-1', '4']);
solve(['2', '5', '1']);