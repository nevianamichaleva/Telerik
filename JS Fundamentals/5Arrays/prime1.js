function solve(number) {
    var n = number;
    var i, j, pr;
    var arr = new Array(n + 2);
    for (i = 2; i < n + 2; i++) arr[i] = true;

    for (i = 2; i * i < n + 2; i++) {
        if (arr[i]) {
            for (j = 0; i * i + i * j < n + 2; j++) {
                arr[i * i + i * j] = false;
            }
        }
    }
    console.log(arr);

    pr = arr.lastIndexOf(true);
    console.log(pr);
}
solve(115);