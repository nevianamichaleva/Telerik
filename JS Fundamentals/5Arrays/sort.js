function solve(args) {
    var arr = args[0].split('\n'),
        n,
        i, j = 0,
        small,
        indSmall,
        len1, len,
        resultArr = [];

    console.log(arr);
    n = arr.shift();
    n = +n;
    len = n;
    //console.log(arr);
    //console.log(typeof(n));
    for (i = 0; i < n; i++) {
        arr[i] = arr[i] * 1;
    }
    //console.log(arr);
    do {
        //console.log(len1);
        small = arr[0];
        for (i = 0; len1 = arr.length, i < len1; i++) {

            if (arr[i] <= small) {
                small = arr[i];
                indSmall = i;
            }
        }
        //console.log("Small: " + small);
        // console.log("Index: " + indSmall);

        resultArr.push(arr[indSmall]);
        //  console.log(resultArr);
        arr.splice(indSmall, 1);
        //  console.log(arr);

        //console.log(len1);
        j++
    } while (j < len);
    console.log(resultArr.join('\r\n'));

}
solve(['6\n3\n4\n1\n5\n2\n6']);
solve(['10\n36\n10\n1\n34\n28\n38\n31\n27\n30\n20']);