/*Problem 6. Most frequent number

Write a script that finds the most frequent number in an array.*/

function solve(args) {
    var arr = args,
        len = arr.length,
        count = 1,
        ind,
        big = 2;
    arr.sort();
    /*console.log(arr);*/
    for (i = 0; i < len; i++) {
        if (arr[i] === arr[i + 1]) {
            count += 1;
            if (count >= big) {
                big = count;
                ind = arr[i];
                /*console.log(ind);*/
            }
        } else {
            count = 1;

        }
    }
    console.log(ind + " (" + big + " times)");
}
solve([1, 0, 11, 0, 8, 15, 10, 0, 12, 0]);
solve([15, 6, 8, 3, 4, 5, -2, -1, 3]);
solve([105, -6, 85, 34, -42, 5, -2, -1, 15, -2, 25, -109, -6, -2]);
solve([1, 0, 0, 10, 8, 8, 10, 8, 12, 8]);
solve([5, 6, 8, 5, 4, 5, 5, -1, 3]);