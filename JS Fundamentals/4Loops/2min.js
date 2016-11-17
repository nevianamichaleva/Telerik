function solve(args) {
    var len = args.length;
    console.log(len);
    var i, min, max, sum, avg;
    for (i = 0; i < len; i++) {
        if (args[i] > args[i++]) {
            max = args[i];
        }
    }
    console.log(max);
}
solve(['3', '2', '5']);
solve(['3', '2', '5', '1']);