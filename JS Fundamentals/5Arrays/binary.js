function solve(args) {
    var arr = args[0].split('\n'),
        n,
        x,
        i,
        mid,
        right,
        left;
    n = arr.shift();
    n = +n;
    x = arr.pop();
    x = +x;
    mid = ((n - 1) / 2) | 0;
    min = 0;
    max = n - 1;
    for (i = 0; i < n; i++) {
        arr[i] = arr[i] * 1;
    }
    arr.sort();
    do {
        if (arr[mid] === x) {
            console.log(mid);

        } else if (arr[mid] > x) {
            min = mid + 1;
            mid = ((min + mid) / 2) | 0;
            if (arr[mid] === x) {
                console.log(mid);
            }
        } else {
            max = mid - 1;
            mid = ((mid + max) / 2) | 0;
            if (arr[mid] === x) {
                console.log(mid);
            }
        }
    } while (min <= max);
}
solve(['6\n3\n4\n1\n5\n2\n6\n15']);
solve(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']);