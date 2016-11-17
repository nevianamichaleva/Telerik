/*Problem 3. Maximal sequence

Write a script that finds the maximal sequence of equal elements in an array.*/
function solve(args) {
    var arr = args[0].split('\n'),
        count = 1,
        big = 2,
        i,
        n;
    n = arr.shift();
    len = +n;
    for (i = 0; i < len; i++) {
        arr[i] = arr[i] * 1;
    }
    for (i = 0; i < len; i++) {
        if (arr[i] === arr[i + 1]) {
            count += 1;
            if (count >= big) {
                big = count;
            }
        } else {
            count = 1;
        }
    }
    console.log(big);
}

solve(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']);
solve(['13\n1\n1\n1\n1\n2\n3\n4\n4\n1\n2\n4\n9\n3']);