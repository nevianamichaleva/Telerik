/*Problem 3. Maximal sequence

Write a script that finds the maximal sequence of equal elements in an array.*/
function solve(args) {
    var arr = args[0].split('\n').map(Number),
        count = 1,
        big = 0,
        i;
    arr.shift();
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1] && arr[i + 1] === (arr[i] + 1)) {
            count += 1;
            if (count > big) {
                big = count;
            }
        } else {
            count = 1;

        }
    }

    console.log(big);

}

solve(['10\n1\n2\n7\n5\n3\n1\n1\n4\n1\n2']);
solve(['13\n1\n1\n1\n1\n2\n3\n5\n1\n1\n2\n4\n9\n3']);
solve(['8\n7\n3\n2\n3\n4\n2\n2\n4']);
solve(['8\n7\n3\n2\n5\n4\n2\n2\n4']);