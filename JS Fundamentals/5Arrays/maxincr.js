/*Problem 3. Maximal sequence

Write a script that finds the maximal sequence of equal elements in an array.*/
function solve(args) {
    var arr = args[0].split('\n').map(Number),
        maxCount = 0,
        currentCount = 1,

        i;
    arr.shift();
    console.log(arr);
    for (i = 0; i < arr.length; i++) {
        if (i != 0) {
            if (arr[i] > arr[i - 1]) {
                if (arr[i] === arr[i - 1] + 1) {
                    currentCount++;
                } else {
                    currentCount = 1;
                }
            }
            if (currentCount >= maxCount) {
                maxCount = currentCount;

            }
        }
    }
    console.log(maxCount);
}

solve(['10\n1\n2\n7\n5\n3\n1\n1\n4\n1\n2']);
solve(['13\n1\n1\n1\n1\n2\n3\n5\n1\n1\n2\n4\n9\n3']);
solve(['8\n7\n3\n2\n3\n4\n2\n2\n4']);
solve(['8\n7\n3\n2\n5\n4\n2\n2\n4']);