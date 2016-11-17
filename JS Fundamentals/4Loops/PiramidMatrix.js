function solve(num) {
    var i, j;
    var row = '';
    for (i = 0; i < num; i++) {
        for (j = (i + 1); j <= (num + i); j++) {
            row += j + " ";
            console.log(row);
           
        }

    }
}
solve(4);