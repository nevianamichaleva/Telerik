function solve(args) {
    var num = args;
    var l = num.length;
    var max = -Infinity;
    var min = Infinity;
    var i;
    var sum = 0,
        avg;
    for (i = 0; l > i; i++) {
        if (+num[i] > max) {
            max = +num[i];
        }
        if (+num[i] < min) {
            min = +num[i];
        }
        sum += +num[i];
    }
    avg = sum / l;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
solve(['2', '-1', '4']);
solve(['2', '5', '1']);