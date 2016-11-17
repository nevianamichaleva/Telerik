function binary(args) {
    var arr = args[0].split("\n").map(Number),
        i,
        find,
        mid,
        min = 0,
        max = arr.length - 1,
        found = false;

    arr.shift();
    find = arr.pop();

    while (found === false) {
        mid = (min + (max - min) / 2) | 0;
        if (find > arr[mid]) {
            min = mid + 1;
        } else if (find < arr[mid]) {
            max = mid - 1;
        } else {
            found = true;
            console.log(mid);
        }
    }

}

binary(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']);