function solve(num) {
    var i, j;
    var row = '';
    for (i = 0; i < +num[0]; i++) {
        for (j = (i + 1); j <= (+num[0] + i); j++) {
            row += j + " ";

        }
        row += '\n';
    }
    console.log(row);
}
solve(['2']);
solve(['3']);
solve(['4']);