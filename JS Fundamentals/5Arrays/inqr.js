function solve(args) {
    var arr = args[0].split('\n');
    var n = +arr[0];
    var arrRez = [];
    var max = 0;
    var seq = 0;
    var i;
    arr[n - 1] = undefined;
    console.log(arr);
    for (i = 1; i < arr.length; i++) {
        arrRez[i - 1] = +arr[i];
    }
    console.log(arrRez);
    for (i = 1; i < arrRez.length; i++) {
        if (arrRez[i] > arrRez[i - 1]) {
            seq++;
            if (seq > max) {
                max = seq;
            }
        } else {
            seq = 0;
        }
    }
    console.log(max);
}
solve(['10\n1\n2\n7\n5\n3\n1\n1\n4\n1\n2']);
solve(['13\n1\n1\n1\n1\n2\n3\n5\n1\n1\n2\n4\n9\n3']);
solve(['8\n7\n3\n2\n3\n4\n2\n2\n4']);
solve(['8\n7\n3\n2\n5\n4\n2\n2\n4']);